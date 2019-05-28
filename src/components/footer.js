import React from 'react'
import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <p>Powered by <a 
                className={footerStyles.link}
                target="_blank" 
                href="https://www.gatsbyjs.org/"
                rel="noopener noreferrer">
                     Gatsby</a>
                 . Malak Tayeh © 2019.</p>
        </footer>
    )
}

export default Footer;