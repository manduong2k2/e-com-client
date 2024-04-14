import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [brand_id, setBrand_id] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://jul2nd.ddns.net/api/product/create', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    stock,
                    price,
                    image,
                    stock,
                    description,
                    brand_id
                })
            });

            // Xử lý phản hồi từ backend ở đây (ví dụ: lưu token vào localStorage)
        } catch (error) {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Stock:</label>
                    <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div>
                    <label>Brand:</label>
                    <input type="text" value={brand_id} onChange={(e) => setBrand_id(e.target.value)} />
                </div>
                {error && <div>{error}</div>}
                <button type="submit">Submit</button>
                <Link to='/'>Cancel</Link>
            </form>
        </div>
    );
};

export default AddProduct;