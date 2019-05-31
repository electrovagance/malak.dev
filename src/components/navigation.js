import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import navStyles from './navigation.module.scss'

const Header = () => {
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
        <header className={navStyles.header}>
            <h1>
                <Link to="/" className={navStyles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={navStyles.navList}>
                    <li>
                        <Link 
                        to="/" 
                        className={navStyles.navItem} 
                        activeClassName={navStyles.activeNavItem}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="/about" 
                        className={navStyles.navItem} 
                        activeClassName={navStyles.activeNavItem}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="/blog" 
                        className={navStyles.navItem} 
                        activeClassName={navStyles.activeNavItem}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="/projects" 
                        className={navStyles.navItem} 
                        activeClassName={navStyles.activeNavItem}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="/todayilearned" 
                        className={navStyles.navItem} 
                        activeClassName={navStyles.activeNavItem}>
                            TIL
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="/contact" 
                        className={navStyles.navItem} 
                        activeClassName={navStyles.activeNavItem}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;