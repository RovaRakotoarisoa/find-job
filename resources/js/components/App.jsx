import React from 'react'
import Router from'../router/Index'

import { NavLink } from 'react-router-dom'


function Head() {
  return (
    <div>
        <h2> Bonjour </h2>
        <nav>
          <NavLink to="/">
             go to head
          </NavLink>
        </nav>
        <Router/>
    </div>
  )
}

export default Head