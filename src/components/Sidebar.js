// GitBook-style Navigation Component
import * as React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
//import '../styles/sidebar.scss'

const Sidebar = () => {

  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Sidebar i18n</h2>
      <LanguageSwitcher />
    </aside>
  )
}

export default Sidebar
