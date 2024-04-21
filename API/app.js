const express = require('express');
const app = express();

const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://ypwcudwnsnqtuytinvao.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwd2N1ZHduc25xdHV5dGludmFvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mjc5Mzk2MCwiZXhwIjoyMDA4MzY5OTYwfQ.MylWz4ag5C3XpEWD1Mv2JWK5Ois2jinmii5lY2aiqF0'

const supabase = createClient(supabaseUrl, supabaseKey)

const stripe = Stripe('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');

const cors = require("cors")
app.use(cors({
  origin: "https://findmoremaps.com"
}))

app.use((req, res, next) => {
    if (req.originalUrl === '/webhook') {
      next();
    } else if(req.originalUrl === '/checkout' || '/billing') {
      express.urlencoded({ extended:true })(req, res, next);
    } else {
      express.json()(req, res, next);
    }
});

app.get('/get-maps', async (req, res) => { 
    res.set('Access-Control-Allow-Origin', 'https://findmoremaps.com')
    // res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    
    if (req.hostname === "findmoremaps.com") {
        if (req.query.authenticated == "true") {
          await supabase
          .from('maps')
          .select('*')
          .then((result) => {
            res.send(JSON.stringify([...result.data]))
          })
        } else {
            res.sendStatus(403)
        }
    } else {
      res.sendStatus(403)
    }
})

app.post('/checkout', async (req, res) => {  
    let { data: data, error } = await supabase
    .from('customers')
    .select(`stripeId`)
    .eq('userId', String(req.body.userId))
  
    if (data.length > 0 && !error) {
      const customer = data[0]["stripeId"]
      const session = await stripe.checkout.sessions.create({
        line_items: [{price: 'price_1NojfPHPFHitAL3lDNJ23yAy', quantity:1}],
        mode: 'subscription',
        allow_promotion_codes: true,
        customer,
        success_url: `https://findmoremaps.com/maps`,
        cancel_url: `https://findmoremaps.com/maps`,
      });
  
      res.redirect(303, session.url);
    } else {
      const customerBody = await stripe.customers.create({
        email: req.body.userEmail,
        metadata: { SBuserId: req.body.userId }
      });
  
      let { data: data, error } = await supabase
      .from('customers')
      .insert([
        { userId: String(req.body.userId), userEmail: String(req.body.userEmail), stripeId: String(customerBody.id) },
      ])
  
      if(error) return;
  
      const customer = customerBody.id;
      const session = await stripe.checkout.sessions.create({
        line_items: [{price: 'price_1NojfPHPFHitAL3lDNJ23yAy', quantity:1}],
        mode: 'subscription',
        allow_promotion_codes: true,
        customer,
        success_url: `https://findmoremaps.com/maps`,
        cancel_url: `https://findmoremaps.com/maps`,
      });
  
      res.redirect(303, session.url);
    }
  });

app.post('/billing', async (req, res) => {  
    let { data: data, error } = await supabase
    .from('customers')
    .select(`stripeId`)
    .eq('userId', String(req.body.userId))
  
    if (data.length > 0 && !error) {
        const session = await stripe.billingPortal.sessions.create({
           customer: data[0]["stripeId"],
           return_url: 'https://findmoremaps.com/maps',
        });
  
        res.redirect(303, session.url);
    }  
});

app.post('/webhook', express.raw({type: 'application/json'}), async (request, response) => {
    // response.set('Access-Control-Allow-Origin', 'https://findmoremaps.com')
    const sig = request.headers['stripe-signature'];
    let endpointSecret = "whsec_8YVQrHt1DfhJWhWk88GdSH1u8nicGZtj"
  
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      const { data: customers, error } = await supabase
      .from('customers')
      .select(`userId, userEmail`)
      .eq('stripeId', String(session.customer))
  
      if (customers){
        const { data: updatedUser, errorUpdated } = await supabase.auth.admin.updateUserById(
          customers[0]["userId"],
          { user_metadata: { type: "subscribed" } }
        )
      }
    }

    if (event.type === 'customer.subscription.deleted') {
        const session = event.data.object;
        
        const { data: customers, error } = await supabase
        .from('customers')
        .select(`userId, userEmail`)
        .eq('stripeId', String(session.customer))
    
        if (customers){
          const { data: updatedUser, errorUpdated } = await supabase.auth.admin.updateUserById(
            customers[0]["userId"],
            { user_metadata: { type: "free" } }
          )
        }
      }
  
    response.sendStatus(200);
  });

app.listen(4242, () => console.log('Running on port 4242'));