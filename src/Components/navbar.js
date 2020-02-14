import React from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div>
                <nav>
                    <a href = "/">
                        <span>Prayag Desale</span>
                    </a>
                    <ul>
                        <li>
                            <Link to = "/">Home</Link>
                        </li>
                        <li>
                            <NavLink to = "/Projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/Contact">Find me here</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default withRouter(Navbar)