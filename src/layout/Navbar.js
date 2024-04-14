import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import '../layout/style.css';
import '../css/style.css';
import cartImage from '../images/cart.png';
// import '../images';
import '../css/bootstrap.min.css';
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
        <nav className="navbar navbar-expand-lg background-radial-gradient">
        <div className="container-fluid">
            <svg width="128" height="46" viewBox="0 0 350 272.23084259697396" className="looka-1j8o68f"><defs id="SvgjsDefs2346"><linearGradient id="SvgjsLinearGradient2353"><stop id="SvgjsStop2354" stop-color="#905e26" offset="0"></stop><stop id="SvgjsStop2355" stop-color="#f5ec9b" offset="0.5"></stop><stop id="SvgjsStop2356" stop-color="#905e26" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient2357"><stop id="SvgjsStop2358" stop-color="#905e26" offset="0"></stop><stop id="SvgjsStop2359" stop-color="#f5ec9b" offset="0.5"></stop><stop id="SvgjsStop2360" stop-color="#905e26" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient2361"><stop id="SvgjsStop2362" stop-color="#905e26" offset="0"></stop><stop id="SvgjsStop2363" stop-color="#f5ec9b" offset="0.5"></stop><stop id="SvgjsStop2364" stop-color="#905e26" offset="1"></stop></linearGradient></defs><g id="SvgjsG2347" featurekey="symbolFeature-0" transform="matrix(1.4010410109257054,0,0,1.4010410109257054,104.89869431444575,0.2457457928296179)" fill="url(#SvgjsLinearGradient2353)"><path xmlns="http://www.w3.org/2000/svg" d="M69.8,93.508c-3.135,0.113-10.411,2.352-13.322,2.687c-2.911,0.337-18.808,0.113-27.988-5.374  c-9.181-5.483-11.979-7.499-13.435-8.283c-1.455-0.785-3.695-1.231-6.269-3.359c-2.575-2.126-8.061-5.374-8.621-11.307  c-0.56-5.933,1.568-3.694,2.351-8.396c0.784-4.702,1.119-9.18,5.15-16.121c4.03-6.941,7.949-12.091,10.747-16.233  c2.799-4.142,5.486-8.732,7.501-12.427c2.015-3.694,2.798-6.157,3.47-7.612c0.672-1.456,0.691-3.807,5.551-5.373  c4.86-1.568,4.077-2.127,7.659-1.792s5.374,0.336,8.956,1.456c3.583,1.119,4.479,1.119,6.494,2.462  c2.015,1.344,2.575,1.455,3.021,4.03c0.449,2.576,0.561,7.165,0.672,8.957c0.113,1.791-0.559,4.478-2.127,5.486  c-1.566,1.007-2.462,1.679-3.693,2.015s-2.799-0.336-3.583,0.56s-2.687,1.12-3.918,0.336c-1.232-0.784-1.008-1.456-1.904-1.567  c-0.895-0.111-1.679-0.224-2.238,0.336c-0.561,0.56-2.127,0-2.799-0.56c-0.672-0.559-1.791-0.559-1.791-2.351  c0-1.791-0.336-2.574-0.336-2.574s-2.015,4.589-2.351,6.717c-0.336,2.126-1.231,12.651-0.896,16.345  c0.335,3.695,0.224,8.061,0.335,9.292c0.113,1.231-0.223,4.367,0.56,4.479c0.784,0.111,1.68-1.567,3.918-3.695  c2.239-2.127,5.821-2.686,8.397-2.574c2.574,0.111,4.59,1.231,5.933,2.127s3.247,2.91,4.478,4.254  c1.231,1.344,2.128,2.016,2.128,2.016s2.127-1.455,5.148-2.464c3.023-1.007,6.941-2.798,11.755-2.687  c4.814,0.113,10.12,1.12,14.038,2.687c3.916,1.568,7.207,3.919,7.207,3.919v35.15c0,0-1.377,2.854-3.467,3.639  c-1.852,0.695-12.948,2.217-20.264,0.368C72.581,97.139,69.8,93.508,69.8,93.508z"></path></g><g id="SvgjsG2348" featurekey="nameFeature-0" transform="matrix(2.828968610949476,0,0,2.828968610949476,-5.657937221898952,124.03394624199906)" fill="url(#SvgjsLinearGradient2357)"><path d="M17.24 27.6 l-13.12 0 l0 12.4 l-2.12 0 l0 -27.4 l16.24 0 l0 1.96 l-14.12 0 l0 11.08 l13.12 0 l0 1.96 z M22.88 14.719999999999999 l-1.96 0 l0 -2.12 l1.96 0 l0 2.12 z M22.88 40 l-1.96 0 l0 -20 l1.96 0 l0 20 z M30.2 20 l5.56 0 l0 1.76 l-5.56 0 l0 12.16 c0 3.36 2.2 4.2 4 4.2 l1.52 0 l0 1.88 l-1.56 0 c-2.72 0 -5.88 -1.52 -5.88 -6.08 l0 -12.16 l-3 0 l0 -1.76 l3 0 l0 -5.8 l1.92 0 l0 5.8 z M48.52 40.4 c-6.4 0 -10.32 -2.84 -11 -8.6 l2.12 0 c0.52 4.32 3.72 6.68 8.88 6.64 c5.12 0 7.84 -2.24 7.84 -5.88 c0 -4.08 -4.08 -4.76 -8.32 -5.56 c-4.56 -0.84 -9.32 -1.8 -9.32 -7.36 c0 -4.36 3.6 -7.28 9.08 -7.28 c5.84 0 9.56 3.08 9.88 7.88 l-2.08 0 c-0.32 -3.08 -2.8 -5.92 -7.92 -5.92 c-4.4 0 -6.92 2.24 -6.92 5.36 c0 3.92 3.88 4.6 8 5.36 c4.72 0.88 9.72 1.8 9.72 7.6 c0 4.28 -3.12 7.76 -9.96 7.76 z M65.56 20 l5.56 0 l0 1.76 l-5.56 0 l0 12.16 c0 3.36 2.2 4.2 4 4.2 l1.52 0 l0 1.88 l-1.56 0 c-2.72 0 -5.88 -1.52 -5.88 -6.08 l0 -12.16 l-3 0 l0 -1.76 l3 0 l0 -5.8 l1.92 0 l0 5.8 z M83.44 19.68 c5.8 0 10.28 4.48 10.28 10.28 c0 5.84 -4.48 10.32 -10.28 10.32 c-5.84 0 -10.32 -4.48 -10.32 -10.32 c0 -5.8 4.48 -10.28 10.32 -10.28 z M83.44 21.56 c-4.8 0 -8.36 3.68 -8.36 8.44 c0 4.72 3.56 8.4 8.36 8.4 c4.76 0 8.32 -3.68 8.32 -8.4 c0 -4.76 -3.56 -8.44 -8.32 -8.44 z M104.96 19.68 l0 2.16 c-3.84 0 -6.68 2.92 -6.68 7.28 l0 10.88 l-1.96 0 l0 -20 l1.96 0 l0 3.72 c0.76 -1.52 2.92 -4.04 6.68 -4.04 z M125 35.28 c-1.84 3.04 -4.76 5 -9.24 5 c-6.04 0 -10.4 -4.48 -10.4 -10.32 c0 -5.8 4.4 -10.28 10.24 -10.28 c5.96 0 10.12 4.56 10.12 9.68 c0 0.64 -0.04 1.08 -0.08 1.32 l-18.2 0 c0.32 4.88 4 7.68 8.32 7.68 c3.96 0 6.16 -1.56 7.72 -4.12 z M115.6 21.56 c-4.08 0 -7.68 2.84 -8.16 7.32 l16.24 0 c-0.4 -4.52 -3.96 -7.32 -8.08 -7.32 z"></path></g><g id="SvgjsG2349" featurekey="sloganFeature-0" transform="matrix(1.2668537413721424,0,0,1.2668537413721424,33.47977544994514,246.79241654645992)" fill="url(#SvgjsLinearGradient2361)"><path d="M1.2 16.6 l0 -8.22 c0 -1.88 1.52 -3.4 3.4 -3.4 l6.6 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-6.34 0 c-0.84 0 -1.52 0.68 -1.52 1.52 l0 8.54 c0 0.84 0.68 1.52 1.52 1.52 l6.34 0 c0.14 0 0.26 0.12 0.26 0.26 l0 1.46 l-6.6 0 c-1.88 0 -3.4 -1.54 -3.4 -3.4 z M22.7 4.98 l1.62 0 l0 15.02 l-1.62 0 c-0.14 0 -0.26 -0.12 -0.26 -0.26 l0 -6.4 l-7.18 0 l0 6.4 c0 0.14 -0.12 0.26 -0.26 0.26 l-1.62 0 l0 -15.02 l1.62 0 c0.14 0 0.26 0.12 0.26 0.26 l0 6.38 l7.18 0 l0 -6.38 c0 -0.14 0.12 -0.26 0.26 -0.26 z M34.879999999999995 5.119999999999999 l5.24 14.88 l-1.64 0 c-0.18 0 -0.32 -0.12 -0.36 -0.26 l-1.34 -3.86 l-7.64 0 l-1.34 3.86 c-0.04 0.14 -0.2 0.26 -0.36 0.26 l-1.64 0 l4.88 -13.9 c0.24 -0.66 0.86 -1.12 1.58 -1.12 l2.38 0 c0.1 0 0.2 0.06 0.24 0.14 z M29.74 14.16 l6.44 0 l-2.6 -7.46 l-0.98 0 c-0.16 0 -0.3 0.1 -0.36 0.26 z M45.099999999999994 20 c-1.88 0 -3.42 -1.56 -3.42 -3.46 l0 -11.3 c0 -0.14 0.12 -0.26 0.26 -0.26 l1.62 0 l0 11.74 c0 0.86 0.7 1.56 1.54 1.56 l6.24 0 c0.14 0 0.26 0.12 0.26 0.26 l0 1.46 l-6.5 0 z M56.62 20 c-1.88 0 -3.42 -1.56 -3.42 -3.46 l0 -11.3 c0 -0.14 0.12 -0.26 0.26 -0.26 l1.62 0 l0 11.74 c0 0.86 0.7 1.56 1.54 1.56 l6.24 0 c0.14 0 0.26 0.12 0.26 0.26 l0 1.46 l-6.5 0 z M68.11999999999999 6.699999999999999 c-0.84 0 -1.52 0.68 -1.52 1.52 l0 3.8 c0.2 -0.24 0.56 -0.4 0.98 -0.4 l6.58 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-7.3 0 l0 3.42 c0 0.84 0.68 1.52 1.52 1.52 l6.48 0 c0.14 0 0.26 0.12 0.26 0.26 l0 1.46 l-6.74 0 c-1.88 0 -3.4 -1.52 -3.4 -3.4 l0 -8.22 c0 -1.88 1.52 -3.4 3.4 -3.4 l6.74 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-6.48 0 z M85.02 13.7 l1.82 3.58 c-0.2 -1.56 -0.2 -2.82 -0.3 -4.24 l0 -7.8 c0 -0.14 0.12 -0.26 0.26 -0.26 l1.62 0 l0 15.02 l-1.74 0 c-0.14 0 -0.32 -0.12 -0.38 -0.24 l-6.84 -12.74 c-0.1 -0.18 -0.34 -0.32 -0.54 -0.32 l-0.34 0 l0 13.04 c0 0.14 -0.12 0.26 -0.26 0.26 l-1.62 0 l0 -14.76 c0 -0.14 0.12 -0.26 0.26 -0.26 l2.28 0 c0.64 0 1.4 0.46 1.7 1.02 z M94.26 20.08 c-1.88 0 -3.4 -1.52 -3.4 -3.4 l0 -8.38 c0 -1.88 1.52 -3.4 3.4 -3.4 l6.86 0 l0 1.46 c0 0.14 -0.12 0.26 -0.28 0.26 l-6.58 0 c-0.84 0 -1.52 0.68 -1.52 1.52 l0 8.7 c0 0.84 0.68 1.52 1.52 1.52 l4.14 0 c0.84 0 1.7 -0.68 1.7 -1.52 l0 -3.62 l-3.64 0 c-0.14 0 -0.26 -0.12 -0.26 -0.26 l0 -1.46 l5.34 0 c0.14 0 0.26 0.12 0.26 0.26 l0 5.12 c0 2.12 -1.52 3.2 -3.4 3.2 l-4.14 0 z M107.56 6.699999999999999 c-0.84 0 -1.52 0.68 -1.52 1.52 l0 3.8 c0.2 -0.24 0.56 -0.4 0.98 -0.4 l6.58 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-7.3 0 l0 3.42 c0 0.84 0.68 1.52 1.52 1.52 l6.48 0 c0.14 0 0.26 0.12 0.26 0.26 l0 1.46 l-6.74 0 c-1.88 0 -3.4 -1.52 -3.4 -3.4 l0 -8.22 c0 -1.88 1.52 -3.4 3.4 -3.4 l6.74 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-6.48 0 z M131.86 5.119999999999999 l5.24 14.88 l-1.64 0 c-0.18 0 -0.32 -0.12 -0.36 -0.26 l-1.34 -3.86 l-7.64 0 l-1.34 3.86 c-0.04 0.14 -0.2 0.26 -0.36 0.26 l-1.64 0 l4.88 -13.9 c0.24 -0.66 0.86 -1.12 1.58 -1.12 l2.38 0 c0.1 0 0.2 0.06 0.24 0.14 z M126.72000000000001 14.16 l6.44 0 l-2.6 -7.46 l-0.98 0 c-0.16 0 -0.3 0.1 -0.36 0.26 z M138.66 16.6 l0 -8.22 c0 -1.88 1.52 -3.4 3.4 -3.4 l6.6 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-6.34 0 c-0.84 0 -1.52 0.68 -1.52 1.52 l0 8.54 c0 0.84 0.68 1.52 1.52 1.52 l6.34 0 c0.14 0 0.26 0.12 0.26 0.26 l0 1.46 l-6.6 0 c-1.88 0 -3.4 -1.54 -3.4 -3.4 z M150.84 16.6 l0 -8.22 c0 -1.88 1.52 -3.4 3.4 -3.4 l6.6 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-6.34 0 c-0.84 0 -1.52 0.68 -1.52 1.52 l0 8.54 c0 0.84 0.68 1.52 1.52 1.52 l6.34 0 c0.14 0 0.26 0.12 0.26 0.26 l0 1.46 l-6.6 0 c-1.88 0 -3.4 -1.54 -3.4 -3.4 z M166.42000000000002 6.699999999999999 c-0.84 0 -1.52 0.68 -1.52 1.52 l0 3.8 c0.2 -0.24 0.56 -0.4 0.98 -0.4 l6.58 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-7.3 0 l0 3.42 c0 0.84 0.68 1.52 1.52 1.52 l6.48 0 c0.14 0 0.26 0.12 0.26 0.26 l0 1.46 l-6.74 0 c-1.88 0 -3.4 -1.52 -3.4 -3.4 l0 -8.22 c0 -1.88 1.52 -3.4 3.4 -3.4 l6.74 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-6.48 0 z M182.42000000000002 4.98 c1.88 0 3.4 1.54 3.4 3.4 l0 1.98 c0 1.86 -1.52 3.4 -3.4 3.4 l-4.38 0 c-0.62 0 -1.12 -0.36 -1.16 -0.8 l0 6.78 c0 0.14 -0.12 0.26 -0.26 0.26 l-1.62 0 l0 -13.86 c0 -0.64 0.52 -1.16 1.16 -1.16 l6.26 0 z M183.94 10.52 l0 -2.3 c0 -0.84 -0.68 -1.52 -1.52 -1.52 l-5.16 0 c-0.22 0 -0.38 0.18 -0.38 0.38 l0 4.58 c0 0.2 0.18 0.38 0.38 0.38 l0.02 0 l5.14 0 c0.84 0 1.52 -0.68 1.52 -1.52 z M187.04000000000002 4.98 l10.64 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-4.28 0 l0 13.04 c0 0.14 -0.1 0.26 -0.26 0.26 l-1.62 0 l0 -13.3 l-4.48 0 l0 -1.46 c0 -0.14 0.12 -0.26 0.26 -0.26 z M202.62 6.699999999999999 c-0.84 0 -1.52 0.68 -1.52 1.52 l0 3.8 c0.2 -0.24 0.56 -0.4 0.98 -0.4 l6.58 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-7.3 0 l0 3.42 c0 0.84 0.68 1.52 1.52 1.52 l6.48 0 c0.14 0 0.26 0.12 0.26 0.26 l0 1.46 l-6.74 0 c-1.88 0 -3.4 -1.52 -3.4 -3.4 l0 -8.22 c0 -1.88 1.52 -3.4 3.4 -3.4 l6.74 0 l0 1.46 c0 0.14 -0.12 0.26 -0.26 0.26 l-6.48 0 z M212.4 20 c-0.64 0 -1.16 -0.52 -1.16 -1.16 l0 -12.7 c0 -0.64 0.52 -1.16 1.16 -1.16 l6.42 0 c1.88 0 3.4 1.52 3.4 3.4 l0 8.22 c0 1.86 -1.52 3.4 -3.4 3.4 l-6.42 0 z M213.5 18.28 l5.32 0 c0.84 0 1.52 -0.68 1.52 -1.52 l0 -8.54 c0 -0.84 -0.68 -1.52 -1.52 -1.52 l-5.32 0 c-0.22 0 -0.38 0.16 -0.38 0.38 l0 10.82 c0 0.2 0.16 0.38 0.38 0.38 z"></path></g></svg>
            <button className="navbar-toggler icon-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" >
                <li className="nav-item ">
                    <a id="home-nav" className="nav-link active" aria-current="page" onclick="Home(); changeActiveState('home-nav')">Trang chủ</a>
                </li>
                <li className="nav-item ">
                    <a id="introduce-nav" className="nav-link" onclick="Introduce(); changeActiveState('introduce-nav')">Giới thiệu</a>
                </li>
                <li className="nav-item ">
                    <a id="product-nav" className="nav-link" onclick="ProductView(); changeActiveState('product-nav')">Sản phẩm</a>
                </li>
                <li className="nav-item ">
                    <a id="community-nav" className="nav-link" onclick="PostList(); changeActiveState('community-nav')">Cộng đồng</a>
                </li>
                <li className="nav-item ">
                    <a id="contact-nav" className="nav-link" onclick="Contact(); changeActiveState('contact-nav')">Liên hệ</a>
                </li>

                <li id="search-nav" className="nav-item search-bar" >
                    <form >
                        <input id="search-bar" type="search" placeholder="&#128269;Tìm kiếm sản phẩm..."/>
                    </form>
                </li>
                <li className="nav-item" id="li-cart"  style={{ width: "80px" }}>
                    <a className="nav-link" id="cart" >
                        <img src={cartImage} title="Giỏ hàng" style={{ height: "28px" }}/>
                    </a>
                    <i id="num-cart">0</i>
                </li>
                <li className="user-dropdown nav-item dropdown" id="log">
                 {/* <div  style={{ display: "flex" }}> */}
                    <button onClick={toggleDropdown} className="user-icon nav-link dropdown-toggle" id="account-nav" data-bs-toggle="dropdown" aria-expanded="false">
                        {image ? ( // Check if image cookie exists
                            <img src={image} className="user-avatar" />
                        ) : (
                            <FontAwesomeIcon icon={faUser} />
                        )}
                    </button>
                    {showDropdown && (
                        <ul className="dropdown-menu drop1">
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
                {/* </div> */}
                </li>
            </ul>
             </div> 
           {/* <Link to="/" className="site-title">
                Home
            </Link> */}
            </div>
        </nav>
    );
}

export default Navbar;