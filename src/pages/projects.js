import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'


const ProjectPage = () => {
    return (
        <Layout>
            <Head title="Projects" />
            <div id="projects">
                <h1>Projects <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">⭐️</span></h1>
            </div>
        </Layout>
    )
}

export default ProjectPage;