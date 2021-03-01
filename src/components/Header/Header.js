import React from 'react'
import logo from '../../assets/img/logo.svg'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header >
            <img src={logo} alt={logo}></img>
            <span>Header</span>
        </header>
    )
}

export default Header


