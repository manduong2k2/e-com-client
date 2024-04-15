import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddBrand = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://jul2nd.ddns.net/api/brand/create",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            image,
            description,
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
            <h1>Thêm brand</h1>
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
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
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
              {error && <div style={{color: 'red'}} className="alert alert-danger">{error}</div>}
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

export default AddBrand;
