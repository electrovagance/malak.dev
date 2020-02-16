import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './styles/footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorFirstName
        }
      }
    }
  `)

    return (
        <footer className={footerStyles.footer}>
            <p>Powered by <a 
                className={footerStyles.link}
                target="_blank" 
                href="https://www.gatsbyjs.org/"
                rel="noopener noreferrer">
                     Gatsby</a>
                 . {data.site.siteMetadata.authorFirstName} © 2020.</p>
        </footer>
    )
}

export default Footer;