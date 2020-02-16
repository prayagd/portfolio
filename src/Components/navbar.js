import React from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className = "outside-container">
                <nav id = "navbar">
                    <a href = "/">
                        <h3 className = "name-tag">Prayag Desale</h3>
                    </a>
                    <ul id = "navtags">
                        <li className = "nav-list">
                            <Link to = "/">Home</Link>
                        </li>
                        <li className = "nav-list">
                            <NavLink to = "/Projects">Projects</NavLink>
                        </li>
                        <li className = "nav-list">
                            <NavLink to = "/Contact">Find me here</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default withRouter(Navbar)