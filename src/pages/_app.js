import '../anti.css'
// import 'anticss'

import Header from '../components/Header/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    return <>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
}

export default MyApp