import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <div id="home">
                <h1>Welcome! <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👋</span></h1>
                <h2>My name is Malak and I am a front-end developer living in NYC 
                    specializing in making mobile-first, responsive, and 
                    user-friendly web applications.
                </h2>
            </div>
        </Layout>
    )
}

export default IndexPage;