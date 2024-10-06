import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/nav.css'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <Link to="/">Home</Link>
            <nav>
                <NavLink to="/users" activeclassname="active">Users</NavLink>
                <NavLink to="/axios-users" activeclassname="active">User Search</NavLink>
                <NavLink to="/products" activeclassname="active">Products</NavLink>
                <NavLink to="/products/1" activeclassname="active">Product Search</NavLink>
            </nav>
        </div>
    )
}

export default NavBar
