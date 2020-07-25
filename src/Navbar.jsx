import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css"


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav_container">
                    <div className="nav_brand">
                        <NavLink exact to='/'>Singh Incorporated</NavLink>
                    </div>

            <ul>
                <li><NavLink exact activeClassName='active_nav' to='/'>Home</NavLink></li>
                <li><NavLink exact activeClassName='active_nav' to='/about'>About</NavLink></li>
                <li><NavLink exact activeClassName='active_nav' to='/service'>Service</NavLink></li>
                <li><NavLink exact activeClassName='active_nav' to='/Contact'>Contact</NavLink></li>
            </ul>
        </div>
            </nav>
        </>
    )
}
export default Navbar;