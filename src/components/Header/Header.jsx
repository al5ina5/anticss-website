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
                    <a target="_blank" href="http://github.com/al5ina5/anticss">GitHub</a>
                    <a target="_blank" href="https://www.npmjs.com/package/anticss">npm</a>
                    <Link href="/support">
                        <a>Support anti.css</a>
                    </Link>
                </nav>
            </section>
        </>
    }
}

export default Header