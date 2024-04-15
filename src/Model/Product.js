import React, { useState,useEffect  } from "react";
import axios from "axios";
import { Link,useNavigate  } from "react-router-dom";

const Product = ({ product }) => {
  // Destructure product properties
  const { id, name, price, image,description,stock,brand,user } = product;

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
  const addToCart = async (e) => {
    
    e.preventDefault();
    
    try {
      const response = await axios.post("http://jul2nd.ddns.net/api/cart/add/"+id,{}, {
          headers: {
            'Authorization':'Bearer '+ getCookie('token')
          },
        }
      );
      if(response.status===200){
        alert('Product added to cart !');
      }
      
    } catch (error) {
      console.log('error: '+error.response.data.message);
    }
  };

  return (
    <div className="product-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{stock}</p>
      <p>{description}</p>
      <p>{brand.name}</p>
      <p>{user.fullname}</p>
      <form onSubmit={addToCart}>
              <div className="form-group" style={{ margin: '30px' }}>
                <button style={{ marginRight: '60px' }} type="submit" className="btn btn-primary btn-block">
                  Add to cart
                </button>
              </div>
            </form>
    </div>
  );
};

export default Product;