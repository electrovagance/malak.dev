import React from 'react'
import Layout from '../components/layout'

const TodayILearned = () => {
    return (
        <Layout>
            <div id="til">
                <h1>Today I learned <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">💡</span></h1>
                {/* TODO: Array of TodayILearned posts */}
            </div>
        </Layout>
    )
}

export default TodayILearned;