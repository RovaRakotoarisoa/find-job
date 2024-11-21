import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Head from '../components/Head'

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Head />} />
      </Routes>
    </div>
  )
}

export default Index