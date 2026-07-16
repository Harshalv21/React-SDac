import React from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import Props_eg from './components/Props_eg'
import Con1 from './components/Con1'
import Con2 from './components/Con2'
import Con3 from './components/Con3'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Props_eg name='Harshal' age={22}/>
        <Con1 isLogged={false}/>
        <Con2 isLogged={true}/>
        <Con3 status={''}/>
      </BrowserRouter>
    </>
  )
}

export default App
