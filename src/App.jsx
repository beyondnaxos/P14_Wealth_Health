/**
 * @fileoverview Main App component for the React application.
 */

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing/Routing.jsx'
import './App.css'
import Nav from './Components/Nav/Nav.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { createContext, useState } from 'react'
import * as mockData from './mock/mockedData.json'

/**
 * @typedef {object} UsersInfosContext
 * @property {Array} usersInfos - Array of user information objects.
 * @property {Function} setUsersInfos - Function to update the usersInfos state.
 */

/**
 * @type {React.Context<UsersInfosContext>}
 */
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
