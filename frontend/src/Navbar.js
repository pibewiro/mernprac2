import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">ExerciseLiist</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercise List</Link>
                    </li>

                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercise List</Link>
                    </li>

                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercise List</Link>
                    </li>

                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercise List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
