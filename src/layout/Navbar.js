import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../css/style.css";
import cartImage from "../images/cart.png";
import "../css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Consider using a dedicated library like `js-cookie` for more robust cookie handling
function getCookie(name) {
  const value = `; `;
  const parts = document.cookie.split(value);
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].split("=");
    if (part.length === 2 && name === part[0]) {
      return part[1];
    }
  }
  return "";
}
function setCookie(name, value, options = {}) {
  let exp = new Date();
  exp.setTime(exp.getTime() + (options.expires || 0));
  document.cookie = `${name}=${value};${options.path || "/"};${
    options.sameSite || ""
  };${exp.toUTCString()}`;
}
function removeCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}
function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch token from cookie on component mount
  const [token, setToken] = useState(getCookie("token"));
  const [name, setName] = useState(getCookie("name"));
  const [image, setImage] = useState(getCookie("image"));

  useEffect(() => {
    setToken(getCookie("token"));
    setName(getCookie("name"));
    setImage(getCookie("image"));
  }, []); // Empty dependency array ensures fetching only once

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    removeCookie("token");
    removeCookie("name");
    removeCookie("image");
    setToken(""); // Update state to reflect logout
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler icon-nav"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link
                id="home-nav"
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Trang chủ
              </Link>
            </li>
            <li className="nav-item ">
              <Link id="introduce-nav" className="nav-link" to="/introduce">
                Giới thiệu
              </Link>
            </li>
            <li className="nav-item ">
              <Link id="introduce-nav" className="nav-link" to="/introduce">
                Sản phẩm
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                id="contact-nav"
                className="nav-link"
                onClick="Contact(); changeActiveState('contact-nav')"
              >
                Liên hệ
              </Link>
            </li>
            {/* ------admin------ */}
            <li className="danhmuc-dropdown nav-item dropdown">
              <a
                onClick={toggleDropdown}
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quản lý
              </a>
              {showDropdown && (
                <ul className="dropdown-menu drop2">
                  <li>
                    <Link to="/">Tài khoản</Link>
                  </li>
                  <li>
                    <Link to="/">Nhãn hiệu</Link>
                  </li>
                  <li>
                    <Link to="/">Loại sản phẩm</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* ------admin------ */}
            <li id="search-nav" className="nav-item search-bar">
              <form>
                <input
                  id="search-bar"
                  type="search"
                  placeholder="&#128269;Tìm kiếm sản phẩm..."
                />
              </form>
            </li>
            <li className="nav-item" id="li-cart" style={{ width: "80px" }}>
              <a className="nav-link" id="cart">
                <img
                  src={cartImage}
                  title="Giỏ hàng"
                  style={{ height: "28px" }}
                />
              </a>
              <p id="num-cart">0</p>
            </li>
            <li className="user-dropdown nav-item dropdown" id="log">
              {/* <div  style={{ display: "flex" }}> */}
              <button
                onClick={toggleDropdown}
                className="user-icon nav-link dropdown-toggle"
                id="account-nav"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
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
                      <Link to="" onClick={handleLogout}>
                        Logout
                      </Link>
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
