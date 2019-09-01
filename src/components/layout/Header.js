import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Simple To-Do List</h1>
            <Link to="/" style={{ color: 'white' }}>Home</Link> | <Link to="/about" style={{ color: 'white' }}>About</Link>
        </header>
    )
}

export default Header;
