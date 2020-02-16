import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from '../styles/contact.module.scss'

import { IconContext } from "react-icons"
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram, FaAngellist, FaCodepen } from 'react-icons/fa'     

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div id="contact">
                <h2>Contact me <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✉️</span></h2>
                <p>Got a project you would like me to work on? Or how about just a friendly chat? Feel free to message me via:</p>
                <span>
                    <IconContext.Provider value={{ size: "5rem", className: contactStyles.socialMedia }}>
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
        </Layout>
    )
}

export default ContactPage;