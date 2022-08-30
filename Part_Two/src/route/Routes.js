import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import NewItem from '../screens/NewItem'

const RoutesContainer = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-item" element={<NewItem />} />
            <Route>404 Not Found</Route>
        </Routes>
    </>
  )
}

export default RoutesContainer