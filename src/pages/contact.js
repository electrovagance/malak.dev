import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';


const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div id="contact">
                <h2>Contact me <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✉️</span></h2>
                <p>Got a project you would like me to work on? Or how about just a friendly chat? Feel free to message me!</p>
                {/* TODO: NETLIFY FORM + SUBMISSION! */}
            </div>
        </Layout>
    )
}

export default ContactPage;