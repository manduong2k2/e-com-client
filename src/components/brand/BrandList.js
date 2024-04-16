import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BrandList = () => {
  const [brands, setBrands] = useState([]);
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
      .get("http://jul2nd.ddns.net/api/brands", {
        headers: {
          Authorization: "Bearer " + getCookie("token"),
        },
      })
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error.response.data.error);
      });
  }, []);
  return (
    <div>
      <h2>Brand List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>Tên nhãn hiệu</th>
            <th>Ảnh</th>
            <th>Mô tả</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr>
              <td>{brand.id} </td>
              <td>{brand.name}</td>
              <td>
                <img src={brand.image} height={90} width={90} border="1px solid #ccc" />
              </td>
              <td>{brand.description}</td>
              <td>
                <div className="form-group">
                <button style={{marginRight: '30px'}} className="btn btn-primary btn-block">
                <Link to='/EditBrand'></Link>Sửa
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

export default BrandList;