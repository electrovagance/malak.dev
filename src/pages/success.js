import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';


const SuccessPage = () => (
    <Layout>
        <Head title="Success"/>
        <div id="success">
            <h3>Success! <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">🎉</span></h3>
            <p>Thank you for contacting me! I will get back to you as soon as I can.</p>
        </div>
  </Layout>
);

export default SuccessPage;