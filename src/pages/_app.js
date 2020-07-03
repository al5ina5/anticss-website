import '../anti.css'
// import 'anticss'

import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    return <>
        <Meta />
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
}

export default MyApp