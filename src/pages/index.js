import React from "react"
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <div id="home">
                <h1>Hello <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👋</span></h1>
                <h2>I'm Malak, a front-end developer living in NYC.</h2>
            </div>
        </Layout>
    )
}

export default IndexPage;