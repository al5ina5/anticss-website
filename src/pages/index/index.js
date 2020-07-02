import React from 'react'

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
                    <li>Dead simple blogs + content-first websites.</li>
                    <li>Developing easy-to-read HTML only prototypes.</li>
                    <li>Super light-weight, attractive, modernt websites.</li>
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
                <pre>&lt;link rel="stylesheet" href="http://unpkg.com/anticss@latest/anti.css" /&gt;</pre>
            </section>

            <section>
                <h2>Social Media</h2>
                <p>More from anti.css and it's developers.</p>
                <button>Discord</button>
                <button>Twitter</button>
                <button>Github</button>
            </section>

            <section>
                <h2>Sponsors</h2>
                <p>Sponsors help support free tools.</p>
                <button>Become a Sponsor</button>
            </section>

        </>
    }
}

export default Index