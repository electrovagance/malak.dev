import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './styles/blog.module.scss'
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
          <Head title="Blog" />
            <div id="blog">
                <h2><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📙</span> Blog</h2>
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