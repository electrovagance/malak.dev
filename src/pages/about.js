import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

import aboutStyles from './styles/about.module.scss';

import { IconContext } from "react-icons";
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram, FaAngellist, FaCodepen } from 'react-icons/fa';

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

                    <h3>Social Media</h3>
                    <span>
                        <IconContext.Provider value={{ size: "3rem", className: aboutStyles.socialMedia }}>
                            <a 
                                href="https://twitter.com/electrovagance" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaTwitter />
                            </a>
                            <a 
                                href="https://github.com/electrovagance" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaGithub />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/malaktayeh/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaLinkedinIn />
                            </a>
                            <a 
                                href="https://instagram.com/electrovagance" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaInstagram />
                            </a>
                            <a 
                                href="https://angel.co/malak-tayeh" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaAngellist />
                            </a>
                            <a 
                                href="https://codepen.io/electrovagance" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaCodepen />
                            </a>
                        </IconContext.Provider>
                    </span>
                </div>                
            </div>
        </Layout>
    )
}

export default AboutPage;