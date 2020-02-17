import React from "react";
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <div id="home">
                <h2>Welcome! <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👋</span></h2>
                <p><strong>My name is Malak and I am a fullstack developer living in NYC 
                    specializing in making mobile-first, responsive, and 
                    user-friendly web applications.</strong>
                </p>
            </div>
        </Layout>
    )
}

export default IndexPage;