import Head from 'next/head'
import { Text,
  Heading,
  Box,
  Stack,
  Container,
  Link,
  ListItem,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react'
import NHeader from '../components/NHeader'
import Footer from '../components/Footer.jsx'
import { FaChevronRight } from 'react-icons/fa'

export default function Terms() { 
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://findmoremaps.com/terms" />

        <title>Terms - Find More Maps</title>
        <meta name="description" content="At Find More Maps, we put our users first. To keep you in the know, here is our privacy policy - detailing the data we collect and how we use it." />

        <meta name="twitter:title" content="Terms - Find More Maps" />
        <meta name="twitter:description" content="At Find More Maps, we put our users first. To keep you in the know, here is our privacy policy - detailing the data we collect and how we use it." />
        <meta name="twitter:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://findmoremaps.com/terms`}/>

        <meta property="og:title" content="Terms - Find More Maps" />
        <meta property="og:description" content="At Find More Maps, we put our users first. To keep you in the know, here is our privacy policy - detailing the data we collect and how we use it." />
        <meta property="og:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta property="og:url" content={`https://findmoremaps.com/terms`}/>

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />

        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white-translucent" />

        <link rel="apple-touch-icon" sizes="180x180" href="https://findmoremaps.com/s/i/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link rel="manifest" href="https://findmoremaps.com/s/i/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:locale" content="en_US"/>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JDFHV6RBBD"></script>
        <script dangerouslySetInnerHTML={{
            __html:`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-JDFHV6RBBD');`
        }} /> 

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <NHeader />
      <Box as='main'>
          <Box width="100%" padding="1rem 0" bg={'#f0f5f9'}>
            <Container maxW={'5xl'}>
              <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 2, md: 3 }}
                py={{ base: 10, md: 14 }}>
                <Heading
                  fontWeight={600}
                  as="h1"
                  mb={3}
                  fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                  lineHeight={'110%'}
                  color={'#2f855ab8'}>
                  Terms and Conditions
                </Heading>
                <Text lineHeight={1.5} color={'gray.500'} fontSize="1.25rem" maxW={'3xl'}>
                While using Find More Maps, we kindly request you to follow these terms to help keep everyone safe and everything running smoothly.
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1500px'}>
          <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>1. Terms</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>By accessing Find More Maps, accessible from findmoremaps.com, you are agreeing to be bound by these website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in Find More Maps are protected by copyright and trade mark law.</Text>
            <br />
            <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>2. Use License</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>Permission is granted to download the materials on Find More Maps. This is the grant of a license, not a transfer of title, and under this license you may not:</Text>
            <br />
            <UnorderedList style={{ paddingLeft:"30px" }}>
                <ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />attempt to reverse engineer any software contained on Find More Maps;</ListItem>
                <ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />remove any copyright or other proprietary notations from the materials; or</ListItem>
                <ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />transferring the materials to another person or &quot;mirror&quot; the materials on any other server.</ListItem>
            </UnorderedList>
            <br />
            <Text color={"gray.600"} fontSize={"lg"}>This will let Find More Maps to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</Text>
            <br />
            <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>3. Disclaimer</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>All the materials on Find More Maps&apos;s website are provided &quot;as is&quot;. Find More Maps makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Find More Maps does not make any representations concerning the accuracy or reliability of the use of the materials on its website or otherwise relating to such materials or any sites linked to Find More Maps.</Text>
            <br />
            <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>4. Limitations</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>Find More Maps or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Find More Maps&apos;s website, even if Find More Maps or an authorize representative of Find More Maps has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</Text>
            <br />
            <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>5. Revisions and Errata</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>The materials appearing on Find More Maps&apos;s website may include technical, typographical, or photographic errors. Find More Maps will not promise that any of the materials in Find More Maps are accurate, complete, or current. Find More Maps may change the materials contained on its website at any time without notice. Find More Maps does not make any commitment to update the materials.</Text>
            <br />
            <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>6. Links</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>Find More Maps has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Find More Maps of the site. The use of any linked website is at the user&apos;s own risk.</Text>
            <br />
            <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>7. Site Terms of Use Modifications</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>Find More Maps may revise these Terms of Use for its website at any time without prior notice. By using Find More Maps, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</Text>
            <br />
            <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>8. Your Privacy</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>Please read our <Link href="/privacy" _hover={{ textDecoration:"none", opacity:0.8 }} color={'blue.300'}>privacy policy</Link>.</Text>
            <br />
            <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>9. Governing Law</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>Any claim related to Find More Maps shall be governed by the laws of US without regards to its conflict of law provisions.</Text>
            <br />
            <Heading
              color={"gray.600"}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>10. Our Service</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>By using Find More Maps, you are agreeing that you will not abuse the dashboard through the use of scraping, APIs, or excessive use. Any violation of this may result in an account lock, at our discretion.</Text>
            </Container>
            </Box>
      <Footer />
    </div>
  )
}