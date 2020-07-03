import React from 'react'

import Header from '../../components/Header/Header'

class Support extends React.Component {
    render() {
        return <>
            <section>
                <h1>Support anti.css</h1>
                <p>If you'd like to support anti.css because you found it helpful, clever, ingenious, attractive, or maybe because you absolutely hate it, you'd be contributing to something great!</p>
                <h3>Patreon</h3>
                <a href="https://patreon.com/sebastianalsina">
                    <button>
                        Become a Patron
                    </button>
                </a>
                <h3>Bitcoin Address</h3>
                <pre>3AJ6FtwZpvP6UExcPqnG4hWgivvAxf8ejf</pre>
                <h3>Stellar Address</h3>
                <pre>GDY6TJFWJTEPY6UPYTE7756I3LAY34FODNJET3TJPNJKN34UMS4PGVM7</pre>
            </section>
        </>
    }
}

export default Support