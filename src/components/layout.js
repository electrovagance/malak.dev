import React from 'react'
import Header from './navigation'
import Footer from './footer'

const Layout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;