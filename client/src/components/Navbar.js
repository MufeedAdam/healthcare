import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './homy.css'
import 'materialize-css/dist/css/materialize.min.css'
const Navbar = () => {
    return (
        <nav className="nav-design">
            <div className="container">
                <ul><li className="logo">GAMA</li></ul>
                <ul className="right">
                    <li><Link to="/home" className="nav-text">Home</Link></li>
                    <li><NavLink to="/Activity" className="nav-text">Activity</NavLink></li>
                    <li><NavLink to="/Labrecord" className="nav-text">Lab Records</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;