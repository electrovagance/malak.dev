import React from 'react'
import Layout from '../components/layout'
import Button from '../components/defaultbutton'

const AboutPage = () => {
    return (
        <Layout>
            <div id="about">
                <div>
                    <h1>About me <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👩‍💻</span></h1>
                    <p>I am a self-directed learner who enjoys creating dynamic and beautiful web apps in my freetime.</p>
                    <h3>Resume</h3>
                    <Button>Download</Button>
                </div>
                {/* <div>
                    <img alt="Malak Tayeh" src="/../src/img/profile-pic.jpg"/>
                </div> */}
                
            </div>
        </Layout>
    )
}

export default AboutPage;