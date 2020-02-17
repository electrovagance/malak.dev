const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const todayILearnedTemplate = path.resolve('./src/templates/todayilearned.js')
    const projectsTemplate = path.resolve('./src/templates/projects.js')

    const blogResponse = await graphql(`
        query {
            allContentfulBlogPosts {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    const projectResponse = await graphql(`
        query {
            allContentfulProjectPosts {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    const todayILearnedResponse = await graphql(`
        query {
            allContentfulTodayILearnedPosts {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    blogResponse.data.allContentfulBlogPosts.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    projectResponse.data.allContentfulProjectPosts.edges.forEach((edge) => {
        createPage({
            component: projectsTemplate,
            path: `/projects/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    todayILearnedResponse.data.allContentfulTodayILearnedPosts.edges.forEach((edge) => {
        createPage({
            component: todayILearnedTemplate,
            path: `/til/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}