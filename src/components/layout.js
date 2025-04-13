import * as React from 'react'
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LanguageSwitcher from './LanguageSwitcher'
import Menu from './Menu'
import Sidebar from './Sidebar'


const Layout = ({ pageTitle, children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

/*    
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  //console.log("Layout data \n", JSON.stringify(data, null, 2));

  //      <header className="site-title">{data.site.siteMetadata.title}</header>      
*/

  return (
    <div className="layout">
      <Menu />
      <div className="layout-body">
        <Sidebar className={isSidebarOpen ? 'open' : ''} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout