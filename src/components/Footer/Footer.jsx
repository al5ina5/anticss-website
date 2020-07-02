import React from 'react'
import Link from 'next/link'

import Header from '../Header/Header'

class Footer extends React.Component {
    render() {
        return <>
            <Header />
            <section>
                <footer>
                    <p>Designed and Developed by <a href="https://sebastianalsina.com">Sebastian Alsina</a></p>
                </footer>
            </section>
        </>
    }
}

export default Footer