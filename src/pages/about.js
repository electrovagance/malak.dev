import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <div id="about">
                <div>
                    <h2>About me <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👩‍💻</span></h2>
                    <p>I am a self-directed learner who enjoys the challenge of creating dynamic and beautiful web apps in my free-time.</p>

                    <h3>Resume</h3>
                    <p>For all the HR Managers out there, here is my <a href="https://api.swiftcv.com/public/resume-pdf?handle=tenshi" target="_#">resume</a>.</p>
                </div>                
            </div>
        </Layout>
    )
}

export default AboutPage;