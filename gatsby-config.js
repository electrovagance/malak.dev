/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
      resolve: `gatsby-plugin-sass`
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
