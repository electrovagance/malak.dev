import React from "react"
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <div id="home">
                <h1>Hello! <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👋</span></h1>
                <h2>Hello, my name is Malak and I am front-end developer living in NYC who 
                    specializes in making mobile-first, responsive, and user-friendly websites/web applications.
                </h2>
            </div>
        </Layout>
    )
}

export default IndexPage;