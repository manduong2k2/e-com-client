import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Model/Product';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://jul2nd.ddns.net/api/products');
            setProducts(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className='container'>
            <Link to='/AddProduct'>Post a Product</Link>
            <div className="product-grid">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;