/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log('Using environment config: ${activeEnv}')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: 'Malak Tayeh',
    author: 'Malak Tayeh',
    linkedIn: 'https://www.linkedin.com/in/malaktayeh/',
    instagram: 'http://instagram.com/tenshi.jpeg',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/electrovagance'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass'
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Mono', 'Merriweather Sans', 'Crimson Text']
        }
      }
    }
  ]
}
