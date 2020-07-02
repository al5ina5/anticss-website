import React from 'react'
import Link from 'next/link'

class Docs extends React.Component {
    render() {
        return <>
            <section>
                <h2>The <code>&lt;nav&gt;</code> tag</h2>
                <p>Stick a bunch of <code>&lt;a&gt;</code>'s inside a <code>&lt;nav&gt;</code> to create a pretty navbar, as seen above.</p>
            </section>

            <section>
                <h2>The <code>&lt;ul&gt;</code> &amp; <code>&lt;li&gt;</code> tag</h2>
                <p>
                    You can create beautiful lists using <code>ul</code>'s and <code>li</code>'s in plain HTML... just like you're used to.
                </p>
                <ul>
                    <li>
                        anti.css weighs less than <b>10kb</b>! Micro-light for your project.
                    </li>
                    <li>
                        anti.css supports <b>boldening</b>, <i>itaclizing</i>, and <u>underlining</u>.
                    </li>
                    <li>
                        Under the hood, anti.css uses <a href="https://meyerweb.com/eric/tools/css/reset/">Eric Meyer's CSS Reset</a>to standardize things <i>across browsers</i>.
                    </li>
                </ul>
            </section>

            <section>
                <h2>The <code>&lt;h1&gt;</code> tags</h2>
                <h1>Here's an h1.</h1>
                <h2>Here's an h2.</h2>
                <h3>Here's an h3.</h3>
                <h4>Here's an h4.</h4>
                <h5>Here's an h4.</h5>
            </section>

            <section>
                <h2>The <code>&lt;blockquote&gt;</code> and <code>&lt;cite&gt;</code> tags</h2>
                <p>A very intelligent wizard once said...</p>
                <blockquote>
                    <p>anti.css is the ONLY CSS framework you should use.</p>
                    <cite>Intelligent Person, 2020</cite>
                </blockquote>
            </section>

            <section>
                <h2>The <code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>, &amp; <code>&lt;input&gt;</code>'s</h2>
                <form action="">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Email" />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="******" />
                    <input type="submit" />
                </form>
            </section>

            <section>
                <h2>
                    The <code>&lt;table&gt;</code> tags
                </h2>
                <p>
                    anti.css supports many HTML tags, and we're always adding more. <a href="">Create an issue on GitHub</a> if you have HTML tags you'd like to see added to anti.css.
                </p>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Tags</th>
                            <th>Support</th>
                        </tr>
                        <tr>
                            <td>Quote</td>
                            <td><code>&lt;blockquote&gt;</code></td>
                            <td>Supported!</td>
                        </tr>
                        <tr>
                            <td>Code</td>
                            <td><code>&lt;code&gt;</code></td>
                            <td>Supported!</td>
                        </tr>
                        <tr>
                            <td>Code Blocks</td>
                            <td><code>&lt;pre&gt;</code></td>
                            <td>Supported!</td>
                        </tr>
                        <tr>
                            <td>More</td>
                            <td>...</td>
                            <td>Supported!</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <p>
                    Here's a random pic tagged #cat for good luck. Look how nice anti.css makes it look.
                </p>
                <img src="https://source.unsplash.com/1600x900/?cat" alt="" />
                <cite>
                    Random Cat Photo from <a href="http://source.unsplash.com">source.unsplash.com</a>
                </cite>
            </section>
        </>
    }
}

export default Docs