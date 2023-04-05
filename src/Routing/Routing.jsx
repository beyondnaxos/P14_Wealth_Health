import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import List from '../Pages/List/List'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
    </Routes>
  )
  
}

export default Routing