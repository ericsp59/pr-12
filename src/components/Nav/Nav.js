import React from 'react';
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        
        <li><NavLink to='/profile'>
            <span>Profile</span>
          </NavLink></li>

        <li><NavLink to='/friends'>
            <span>Friends</span>
          </NavLink></li>

        <li><NavLink to='/wall'>
            <span>Wall</span>
          </NavLink></li>

      </ul>
    </nav>
  )
}

export default Nav