import React from 'react';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon16 from "../images/favicon-16x16.png";
import favicon32 from "../images/favicon-32x32.png";

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet 
            title={`${title} | ${data.site.siteMetadata.title}`}
            link={[
                { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
                { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` }
            ]}
        
        />
    )
}

export default Head