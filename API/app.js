const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://ypwcudwnsnqtuytinvao.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwd2N1ZHduc25xdHV5dGludmFvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mjc5Mzk2MCwiZXhwIjoyMDA4MzY5OTYwfQ.MylWz4ag5C3XpEWD1Mv2JWK5Ois2jinmii5lY2aiqF0'

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function updateUser(userId){
    const { data: user, error } = await supabase.auth.admin.updateUserById(
        userId,
        { user_metadata: { type: "subscribed" } }
    )

    console.log(user.user, error)
}

updateUser('599c3d61-cf37-4b9d-98c9-8484c7200a4f')