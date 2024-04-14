import React from 'react';

const Product = ({ product }) => {
  // Destructure product properties
  const { id, name, price, image,description,stock,brand,user } = product;

  return (
    <div className="product-item">
      <img src={image} className='product-image' alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{stock}</p>
      <p>{description}</p>
      <p>{brand.name}</p>
      <p>{user.fullname}</p>
    </div>
  );
};

export default Product;