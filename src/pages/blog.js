import React from 'react'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }`
    )

    return (
        <Layout>
            <div id="blog">
                <h1><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📙</span> Blog</h1>
                <div>
                  <ol className={blogStyles.posts}>
                      {
                          data.allMarkdownRemark.edges.map((edge) => {
                              return (
                                  <li className={blogStyles.post}>
                                    <Link to={`/blog/${edge.node.fields.slug}`}>
                                      <h2>{edge.node.frontmatter.title}</h2>
                                      <p>{edge.node.frontmatter.date}</p>
                                    </Link>
                                      
                                  </li>
                              )
                          })
                      }
                  </ol>
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage;