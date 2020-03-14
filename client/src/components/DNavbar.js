import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './homy.css'
import 'materialize-css/dist/css/materialize.min.css'
const DNavbar = () => {
    return (
        <nav className="nav-design">
            <div className="container">
                <ul><li className="logo">GAMA</li></ul>
                <ul className="right">
                    <li><Link to="/doc_home" className="nav-text">Doc_Home</Link></li>
                    <li><NavLink to="/doc_activity" className="nav-text">Doc_Activity</NavLink></li>
                    <li><NavLink to="/doc_labrecord" className="nav-text">Doc_Lab Records</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default DNavbar;