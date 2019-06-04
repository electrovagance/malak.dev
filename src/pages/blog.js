import React from 'react'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost (
          sort: {
            fields:publishedDate,
            order:DESC
          }
        ){
          edges {
            node	{
              title
              slug
              publishedDate (
                formatString: "MMMM Do, YYYY"
              )
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
                          data.allContentfulBlogPost.edges.map((edge) => {
                              return (
                                  <li className={blogStyles.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                      <h2>{edge.node.title}</h2>
                                      <p>{edge.node.publishedDate}</p>
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