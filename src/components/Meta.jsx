import Head from 'next/head'

const Meta = () => (
    <Head>
        <title>anti.css</title>
        <meta name="og:title" property="og:title" content="anti.css" />
        <meta property="og:site_name" content="anti.css" />
        <meta name="twitter:title" content="anti.css" />

        <meta name="description" content="anti.css is a classless CSS framework developed with designing prototypes in mind." />
        <meta name="og:description" property="og:description" content="anti.css is a classless CSS framework developed with designing prototypes in mind." />

        <meta property="og:url" content="https://anticss.vercel.app" />
        <meta name="twitter:site" content="https://anticss.vercel.app" />

        {/* <link rel="icon" type="image/png" href="/img/covid.png" />
        <link rel="apple-touch-icon" href="/img/covid.jpg" />
        <meta property="og:image" content="/img/covid.pjpgng" />
        <meta name="twitter:image" content="https://covid-tracking.vercel.app/img/covid.jpg" /> */}

        <meta name="twitter:creator" content="@youngseebi" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />

        <link rel="stylesheet" href="https://unpkg.com/anticss" />
    </Head>
)

export default Meta