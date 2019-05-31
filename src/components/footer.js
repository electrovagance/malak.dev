import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (
        <footer>
            <p>Powered by <a 
                className={footerStyles.link}
                target="_blank" 
                href="https://www.gatsbyjs.org/"
                rel="noopener noreferrer">
                     Gatsby</a>
                 . {data.site.siteMetadata.title} © 2019.</p>
        </footer>
    )
}

export default Footer;