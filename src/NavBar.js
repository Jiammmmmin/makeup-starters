import './index.css';
import React from 'react';
// import { Link } from 'react-router-dom';
export function NavBar(props){
    return(
        <header>
            <h1>Makeup Starter</h1>
            <nav>
                <div className="navbar-links">
                    {/* <Link to='/profile'> profile </Link>
                    <Link  to='/about'>Home</Link > */}
                </div>
            </nav>
            <h2>Test your skin Tempterature!</h2>
        </header>
    );
}