// src/components/SignUp.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const PersonalAccount = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    axios
      .get("http://jul2nd.ddns.net/api/user", {
        headers: {
          Authorization: "Bearer " + getCookie("token"),
        },
      })
      .then((response) => {
        setUsername(response.data.user.username);
        setFullName(response.data.user.fullname);
        setImage(response.data.user.image);
        setEmail(response.data.user.email);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    const accImage = document.getElementById("accImage").files[0];
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("image", accImage);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await axios.post(
        "http://jul2nd.ddns.net/user/edit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Đăng ký thành công ! xin mời đăng nhập");
        navigate("/login");
      }
      console.log("Message : " + response.data.message);
    } catch (error) {
      setError("Server errror");
      console.log("Message : " + error.response.data.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
      id="formContain"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        class="form-group"
      >
        <h1>Thông tin tài khoản</h1>
        {image ? ( // Check if image cookie exists
          <img
            style={{
              height: "300px",
              width: "300px",
              borderRadius: "60px",
              margin: "30px 0",
            }}
            src={image}
            className="user-avatar"
          />
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )}
        <div className="form-outline mb-4">
          <label style={{ color: "#000" }}>Image: </label>
          <input style={{ color: "#000" }} type="file" id="accImage" />
        </div>
      </div>
      <form style={{ width: "600px", margin: "30px" }} id="accountForm">
        <div id="editAccountInfo">
          <div class="form-group">
            <label for="accountName">Họ và tên:</label>
            <input
              type="text"
              class="form-control"
              required
              readonly
              value={fullname}
            />
          </div>
          <div class="form-group">
            <label for="accountUsername">Username:</label>
            <input type="hidden" id="accountId" value="<%=data.id%>" />
            <input
              type="text"
              value={username}
              class="form-control"
              required
              readonly
            />
          </div>
          <div class="form-group">
            <label for="accountEmail">Email:</label>
            <input
              type="text"
              class="form-control"
              required
              readonly
              value={email}
            />
          </div>
          {/* <div class="form-group">
            <label for="accountEmail">Mật khẩu hiện tại:</label>
            <input
              className="form-control"
              placeholder="Mật khẩu"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="accountEmail">Mật khẩu mới:</label>
            <input
              className="form-control"
              placeholder="Mật khẩu mới"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="accountEmail">Xác nhận lại mật khẩu:</label>
            <input
              className="form-control"
              placeholder="Xác nhận lại mật khẩu"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}
          <Link to="/user/Changepass" type="button" class="btn btn-success" style={{margin: "30px"}}>
              Đổi mật khẩu
            </Link>
          <button type="button" class="btn btn-success" style={{margin: "30px"}}>
              Hoàn tất
            </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalAccount;
