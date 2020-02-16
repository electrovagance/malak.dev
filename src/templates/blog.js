import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPosts(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`
const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPosts.title} />
            <h1>{props.data.contentfulBlogPosts.title}</h1>
            <p>{props.data.contentfulBlogPosts.publishedDate}</p>
            {
                documentToReactComponents(props.data.contentfulBlogPosts.body.json, options)
            }
        </Layout>
    )
}

export default Blog;