import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'

const RoutesContainer = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route>404 Not Found</Route>
        </Routes>
    </>
  )
}

export default RoutesContainer