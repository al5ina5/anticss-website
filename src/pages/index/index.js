import React from 'react'
import Codepen from 'react-codepen-embed'

import Header from '../../components/Header/Header'

class Index extends React.Component {
    render() {
        return <>
            <section>
                <h1>Welcome to anti.css.</h1>
                <h2>
                    Develop modern websites with just HTML. anti.css is a classless<b>*</b> CSS framework developed with designing prototypes in mind.
                </h2>
                <h3>
                    Use anti.css to quickly layout beautifully-designed pages to test the functionality of your web-app, without the clutter of CSS classes.
                </h3>
            </section>

            <section>
                <h2>Prefect for..</h2>
                <ul>
                    <li>Dead simple <u>blogs + content-first websites</u>.</li>
                    <li>Developing easy-to-read HTML only <i>prototypes</i>.</li>
                    <li>Super light-weight, attractive, modern websites.</li>
                    <li><b>Beginners</b>.</li>
                </ul>
            </section>

            <section>
                <h2>Only 5kb.</h2>
                <p>Using anti.css is easy. Here's 2 easy ways:</p>
                <p>1. Download it with your favorite package manager, such as <code>npm install anticss</code> or <code>yarn add anticss</code>.</p>
                <pre>
                    import 'anticss'
                </pre>
                <p>2. Link anti.css into your HTML file from the global CDN.</p>
                <pre>&lt;link rel="stylesheet" href="https://unpkg.com/anticss" /&gt;</pre>
            </section>

            <section>
                <Codepen height={'500'} hash="ExPoPjx" user="al5ina5" />
            </section>

            <section>
                <h2>Open Source</h2>
                <p>
                    Both this website and the anti.css framework are fully open source.
                </p>
                <a target="_blank" href="https://github.com/al5ina5/anticss">
                    <button>github/anticss</button>
                </a>
                <a target="_blank" href="https://github.com/al5ina5/anticss-website">
                    <button>github/anticss-website</button>
                </a>
            </section>

        </>
    }
}

export default Index