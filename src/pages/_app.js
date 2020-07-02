import 'anticss'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
    return <>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
}

export default MyApp