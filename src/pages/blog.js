import React from 'react'
import Layout from '../components/layout'
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
                <h1>Blog</h1>
                <ul>
                    {
                        data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <li>
                                  <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                  </Link>
                                    
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