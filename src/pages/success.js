import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';


const SuccessPage = () => (
    <Layout>
        <Head title="Success"/>
        <div id="success">
            <h3>Success!</h3>
            <p>Thank you for contacting me! I will get to you as soon as I can.</p>
        </div>
  </Layout>
);

export default SuccessPage;