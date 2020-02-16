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
    authorFirstName: 'Malak',
    linkedIn: 'https://www.linkedin.com/in/malaktayeh/',
    instagram: 'http://instagram.com/tenshi.jpeg',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/electrovagance'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-sass'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images'
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 450,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro', 'Merriweather Sans', 'Crimson Text']
        }
      }
    }
  ]
}
