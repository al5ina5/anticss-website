import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
    render() {
        return <>
            <section>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/docs">
                        <a>Docs & Example</a>
                    </Link>
                    <a href="http://github.com/al5ina5/anticss">Github</a>
                    <a>Developer</a>
                    <a>Support anti.css</a>
                </nav>
            </section>
        </>
    }
}

export default Header