import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [brand_id, setBrand_id] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://jul2nd.ddns.net/api/product/create",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            stock,
            price,
            image,
            stock,
            description,
            brand_id,
          }),
        }
      );

      // Xử lý phản hồi từ backend ở đây (ví dụ: lưu token vào localStorage)
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card" style={{margin: '30px'}}>
          <div className="card-body">
            <h1>Thêm sản phẩm</h1>
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="stock">Stock:</label>
                <input
                  type="text"
                  className="form-control"
                  id="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="form-group">
                <label htmlFor="brand_id">Brand:</label>
                <input
                  type="text"
                  className="form-control"
                  id="brand_id"
                  value={brand_id}
                  onChange={(e) => setBrand_id(e.target.value)}
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-group" style={{margin: '30px'}}>
               <button style={{marginRight: '60px'}} type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <Link to="/" className="btn btn-secondary btn-block">
                Cancel
              </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
