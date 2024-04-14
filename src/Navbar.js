import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Consider using a dedicated library like `js-cookie` for more robust cookie handling
function getCookie(name) {
    const value = `; `;
    const parts = document.cookie.split(value);
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i].split('=');
        if (part.length === 2 && name === part[0]) {
            return part[1];
        }
    }
    return '';
}
function setCookie(name, value, options = {}) {
    let exp = new Date();
    exp.setTime(exp.getTime() + (options.expires || 0));
    document.cookie = `${name}=${value};${options.path || '/'};${options.sameSite || ''};${exp.toUTCString()}`;
}
function removeCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? ";path=" + path : "") +
            ((domain) ? ";domain=" + domain : "") +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}
function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    // Fetch token from cookie on component mount
    const [token, setToken] = useState(getCookie('token'));
    const [name, setName] = useState(getCookie('name'));
    const [image, setImage] = useState(getCookie('image'));

    useEffect(() => {
        setToken(getCookie('token'));
        setName(getCookie('name'));
        setImage(getCookie('image'));
    }, []); // Empty dependency array ensures fetching only once

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        removeCookie('token');
        removeCookie('name');
        removeCookie('image');
        setToken(''); // Update state to reflect logout
        window.location.href = '/login';
    };

    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Home
            </Link>
            <div className="user-dropdown">
                {name && ( // Check for both token and email
                    <h4>
                        Hello, {name}!
                    </h4>
                )}
                <button onClick={toggleDropdown} className="user-icon">
                    {image ? ( // Check if image cookie exists
                        <img src={image} className="user-avatar" />
                    ) : (
                        <FontAwesomeIcon icon={faUser} />
                    )}
                </button>
                {showDropdown && (
                    <ul className="dropdown-menu">
                        {token ? (
                            <li>
                                <Link to='' onClick={handleLogout}>Logout</Link>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;