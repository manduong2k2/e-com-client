import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const fetchBrandsAndCategories = async () => {
    try {
      const brands = await axios.get("http://jul2nd.ddns.net/api/brands");
      const categories = await axios.get(
        "http://jul2nd.ddns.net/api/categories"
      );
      setBrands(brands.data);
      setCategories(categories.data);
    } catch (error) {
      console.error("Error fetching :", error);
      setError("Failed to load. Please try again.");
    }
  };
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
    fetchBrandsAndCategories();
    axios
      .get("http://jul2nd.ddns.net/api/products/" + id, {
        headers: {
          Authorization: "Bearer " + getCookie("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setName(response.data.product.name);
        setStock(response.data.product.stock);
        setPrice(response.data.product.price);
        setDescription(response.data.product.description);
        setCategories(response.data.product.category.name);
        setBrands(response.data.product.brand.name);
        setImage(response.data.product.image);
      })
      .catch((error) => {
        console.error("Error fetching products:", error.response);
      });
  }, []);

  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  var [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [brand_id, setBrand_id] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
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
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      image = document.getElementById("productImage").files[0];
      const formData = new FormData();
      formData.append("name", name);
      formData.append("stock", stock);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", categories);
      formData.append("brand", brands);
      if (image) formData.append("image", image);
      formData.append("description", description);
      const response = await axios.patch(
        "http://jul2nd.ddns.net/api/product/edit/" + id,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + getCookie("token"),
          },
        }
      );
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/products");
      } else {
        alert(response.data.message);
      }

      // Xử lý phản hồi từ backend ở đây
    } catch (error) {
      setError("Failed to update product. Please try again.");
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card" style={{ margin: "30px" }}>
          <div className="card-body">
            <h1>Edit Product</h1>
            <form onSubmit={handleUpdateProduct}>
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
                  id="productImage"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category_id">Category:</label>
                <select
                  className="form-control"
                  id="category_id"
                  value={category_id}
                  onChange={(e) => setCategory_id(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="brand_id">Brand:</label>
                <select
                  className="form-control"
                  id="brand_id"
                  value={brand_id}
                  onChange={(e) => setBrand_id(e.target.value)}
                >
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}{" "}
                    </option>
                  ))}
                </select>
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
                <Link to="/products" className="btn btn-secondary btn-block">
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

export default EditProduct;
