import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

import aboutStyles from './styles/about.module.scss';
import GatsbyJS from '../images/gatsbyjs-icon.svg'

import { IconContext } from "react-icons";
import { 
    FaTwitter,
    FaGithub, 
    FaLinkedinIn, 
    FaAngellist, 
    FaCodepen,
    FaHtml5,
    FaCss3,
    FaJs,
    FaNpm,
    FaPython,
    FaReact,
    FaSteam
} from 'react-icons/fa';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <div id="about">
                <div>
                    <h2>About me <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👩‍💻</span></h2>
                    <p>I am a self-directed learner who enjoys the challenge of creating dynamic and beautiful web apps in my free-time.</p>

                    <h3>Technologies I use</h3>
                    <span>
                        <IconContext.Provider value={{ size: "2.5rem", className: aboutStyles.socialMedia }}>
                        <a 
                            href="https://html.spec.whatwg.org/" 
                            target="_blank" 
                            alt="HTML5"
                            rel="noopener noreferrer">
                                <FaHtml5 />
                        </a>
                        <a 
                            href="https://www.w3.org/Style/CSS/" 
                            target="_blank" 
                            alt="CSS3"
                            rel="noopener noreferrer">
                                <FaCss3 />
                        </a>
                        <a 
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
                            target="_blank" 
                            alt="JavaScript"
                            rel="noopener noreferrer">
                                <FaJs />
                        </a>
                        <a 
                            href="https://reactjs.org/" 
                            target="_blank" 
                            ALT="React"
                            rel="noopener noreferrer">
                                <FaReact />
                        </a>
                        <a 
                            href="https://www.npmjs.com/" 
                            target="_blank" 
                            alt="npm"
                            rel="noopener noreferrer">
                                <FaNpm />
                        </a>
                        <a 
                            href="https://www.python.org/" 
                            target="_blank" 
                            alt="python"
                            rel="noopener noreferrer">
                                <FaPython />
                        </a>
                        <a 
                            href="https://www.gatsbyjs.org/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <img src={GatsbyJS} alt="GatsbyJS" width="42.5rem" />
                        </a>

                        </IconContext.Provider>
                    </span>

                
                    <h3>Resume</h3>
                    <p>For all the HR Managers out there, here is my <a href="https://api.swiftcv.com/public/resume-pdf?handle=tenshi" target="_#">resume</a>.</p>


                    <h3>Online Presence</h3>
                    <span>
                        <IconContext.Provider value={{ size: "2.5rem", className: aboutStyles.socialMedia }}>
                            <a 
                                href="https://twitter.com/electrovagance" 
                                target="_blank" 
                                alt="Twitter"
                                rel="noopener noreferrer">
                                    <FaTwitter />
                            </a>
                            <a 
                                href="https://github.com/electrovagance" 
                                target="_blank" 
                                alt="GitHub"
                                rel="noopener noreferrer">
                                    <FaGithub />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/malaktayeh/" 
                                target="_blank" 
                                alt="LinkedIn"
                                rel="noopener noreferrer">
                                    <FaLinkedinIn />
                            </a>
                            <a 
                                href="https://angel.co/malak-tayeh" 
                                target="_blank" 
                                alt="Angel List"
                                rel="noopener noreferrer">
                                    <FaAngellist />
                            </a>
                            <a 
                                href="https://codepen.io/electrovagance" 
                                target="_blank" 
                                alt="Codepen"
                                rel="noopener noreferrer">
                                    <FaCodepen />
                            </a>
                            <a 
                                href="https://steamcommunity.com/id/electrovagance/" 
                                target="_blank" 
                                alt="Steam"
                                rel="noopener noreferrer">
                                <FaSteam />
                            </a>
                        </IconContext.Provider>
                    </span>
                </div>                
            </div>
        </Layout>
    )
}

export default AboutPage;