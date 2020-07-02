import React from 'react'
import Link from 'next/link'

import Header from '../Header/Header'

class Footer extends React.Component {
    render() {
        return <>
            <Header />
            <section>
                <footer>
                    <p>Designed and Developed by Sebastian Alsina</p>
                </footer>
            </section>
        </>
    }
}

export default Footer