import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing/Routing.jsx'
// import { Datablify } from 'datablify'
import './App.css'
import Nav from './Components/Nav/Nav.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { createContext, useState } from 'react'
import * as mockData from './mock/mockedData.json'

const usersInfosContext = createContext()

function App() {
  let [usersInfos, setUsersInfos] = useState(mockData.default)

  return (
    <BrowserRouter>
      <usersInfosContext.Provider value={{ usersInfos, setUsersInfos }}>
        <Header />
        <Nav />
        <Routing />
        <Footer />
      </usersInfosContext.Provider>
    </BrowserRouter>
  )
}

export { usersInfosContext }
export default App
