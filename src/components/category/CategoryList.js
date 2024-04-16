import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
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
  useEffect(() => {
    axios
      .get("http://jul2nd.ddns.net/api/categories", {
        headers: {
          Authorization: "Bearer " + getCookie("token"),
        },
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error.response.data.error);
      });
  }, []);
  return (
    <div>
      <h2>Category List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>Tên loại</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr>
              <td>{category.id} </td>
              <td>{category.name}</td>
              <td>
                <div className="form-group">
                <button style={{marginRight: '30px'}} className="btn btn-primary btn-block">
                Sửa
                </button>
                <button className="btn btn-danger btn-block">
                Xoá
                </button>
              </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;