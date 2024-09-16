import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayList from './component/DisplayList'

import Toggledarklight from './component/toggledarklight'


function App() {
  
const [darkmode, setDarkMode]= useState(false);
  return (
   <>
      <DisplayList/> 
       {/* <Toggledarklight/> */}
   </>
  )
}

export default App
