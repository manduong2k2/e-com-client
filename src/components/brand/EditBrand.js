import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


const EditBrand = () => {
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://jul2nd.ddns.net/api/brand/" + id, {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    })
      .then((response) => {
        setName(response.data.brand.name);
        setImage(response.data.brand.image);
        setDescription(response.data.brand.description);
        setName(response.data.brand.name);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error.response);
      });
  }, []);

  const [name, setName] = useState('');
  var [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
  const handleUpdateBrand = async (e) => {
    e.preventDefault();
    try {
      image = document.getElementById('brandImage').files[0];
      const formData = new FormData();
      formData.append('name', name);
      if (image)
        formData.append('image', image);
      formData.append('description', description);
      const response = await axios.post("http://jul2nd.ddns.net/api/brand/edit/" + id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': 'Bearer ' + getCookie('token')
        },
      });
      if(response.status===200){
        alert(response.data.message);
        navigate('/brands');
      }
      else{
        alert(response.data.message);
      }

      // Xử lý phản hồi từ backend ở đây
    } catch (error) {
      setError("Failed to update brand. Please try again.");
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card" style={{ margin: "30px" }}>
          <div className="card-body">
            <h1>Edit Brand</h1>
            <form onSubmit={handleUpdateBrand}>
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
                <img src={image} height={60} width={60} />
                <input
                  type="file"
                  className="form-control-file"
                  id="brandImage"
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
              {error && (
                <div style={{ color: "red" }} className="alert alert-danger">
                  {error}
                </div>
              )}
              <div className="form-group" style={{ margin: "30px" }}>
                <button
                  style={{ marginRight: "60px" }}
                  type="submit"
                  className="btn btn-primary btn-block"
                >
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

export default EditBrand;
