import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              html
              excerpt
              timeToRead
            }
          }
        }
      }`
    )

    return (
        <Layout>
            <div id="blog">
                <h1>Blog</h1>
                <ul>
                    {
                        data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <li>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.timeToRead} min read</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Layout>
    )
}

export default BlogPage;