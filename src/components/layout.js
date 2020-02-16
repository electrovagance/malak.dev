import React from 'react'
import Header from './navigation'
import Footer from './footer'
import '../index.scss'
import layoutStyles from './styles/layout.module.scss'

const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;