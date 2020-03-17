import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Dnav.css'
import 'materialize-css/dist/css/materialize.min.css'
const DNavbar = () => {
    return (
        <nav className="dnav-design">
            <div className="container">
                <ul><li className="logo">GAMA</li></ul>
                <ul className="right">
                    <li><a href="/doc_home" className="nav-text"><b>Doc_Home</b></a></li>
                    <li><a href="/doc_activity" className="nav-text"><b>Prescribe</b></a></li>
                    <li><a href="/doc_labrecord" className="nav-text"><b>Upload Lab Records</b></a></li>
                    <li><a href="/" className="nav-text"><b>Logout</b></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default DNavbar;