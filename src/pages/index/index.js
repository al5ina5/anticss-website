import React from 'react'

import Header from '../../components/Header/Header'

class Index extends React.Component {
    render() {
        return <>
            <section>
                <h1>Welcome to anti.css.</h1>
                <h2>
                    Develop modern websites in HTML. anti.css is a classless<b>*</b> CSS framework developed with designing prototypes in mind.
                </h2>
                <h3>
                    Use anti.css to quickly layout beautifully-designed pages to test the functionality of your web-app, without the clutter of CSS classes.
            </h3>
                <p>Using anti.css is easy.</p>
                <pre>&lt;link rel="stylesheet" href="./uncss.css" /&gt;</pre>
                <button>View Page Source</button>
            </section>

            <section>
                <h2>Join the Mailing List</h2>
                <p>Want in on other fun web stuff I build? I think you do.</p>
                <form>
                    <label for="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your Email"
                    />
                    <input type="submit" />
                </form>
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