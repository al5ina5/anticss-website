import React from 'react'
import Link from 'next/link'

import Header from '../Header/Header'

class Footer extends React.Component {
    render() {
        return <>
            <section>
                <footer>
                    <nav>
                        <a target="_blank" href="http://github.com/al5ina5/anticss">GitHub</a>
                        <a target="_blank" href="https://www.npmjs.com/package/anticss">npm</a>
                    </nav>
                    <p>Designed and Developed by <a href="https://sebastianalsina.com">Sebastian Alsina</a></p>
                </footer>
            </section>
        </>
    }
}

export default Footer