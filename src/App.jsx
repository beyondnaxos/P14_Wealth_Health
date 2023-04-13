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

/* This code is creating a React context called `usersInfosContext` using the `createContext()`
function. It is then defining a component called `App` which is a parent component that wraps around
other components. Within the `App` component, it is using the `useState()` hook to create a state
variable called `usersInfos` and a function called `setUsersInfos` to update the state. It is then
passing these values as a context value to all child components using the
`usersInfosContext.Provider` component. Finally, it is exporting the `usersInfosContext` and the
`App` component as the default exports of the module. */

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
