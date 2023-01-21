import React from 'react'
import { useSelector } from 'react-redux'
import DarkModeSwitcher from './components/dark-mode/dark-mode-switcher'
import LangSwitcher from './components/lang-switcher/lang-switcher'

import "./App.css"

const App = () => {


  const darkMode= useSelector(state => state.theme.darkMode)
  
  return (
      <div className={darkMode === true ? "dark" : ""}>
        <DarkModeSwitcher/>
        <LangSwitcher/>
      </div>
  )
}

export default App