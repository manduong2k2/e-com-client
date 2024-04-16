import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Model/Product';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            // Fetch danh sách sản phẩm
            const productsResponse = await axios.get('http://jul2nd.ddns.net/api/products');
            setProducts(productsResponse.data);

            // Fetch danh sách thương hiệu
            const brandsResponse = await axios.get('http://jul2nd.ddns.net/api/brands');
            setBrands(brandsResponse.data);

            // Fetch danh sách danh mục
            const categoriesResponse = await axios.get('http://jul2nd.ddns.net/api/categories');
            setCategories(categoriesResponse.data);
        };
        fetchData();
    }, []);

    // Xử lý sự kiện khi thay đổi thương hiệu được chọn
    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    // Xử lý sự kiện khi thay đổi danh mục được chọn
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Lọc danh sách sản phẩm dựa trên thương hiệu và danh mục được chọn
    const filteredProducts = products.filter(product => {
        if (selectedBrand && product.brand.id !== selectedBrand) {
            return false;
        }
        if (selectedCategory && product.category.id !== selectedCategory) {
            return false;
        }
        return true;
    });

    return (
        <div className='container'>
            {/* Select box cho thương hiệu */}
            <select value={selectedBrand} onChange={handleBrandChange}>
                <option value="">Chọn thương hiệu</option>
                {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                ))}
            </select>

            {/* Select box cho danh mục */}
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Chọn danh mục</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>

            <div style={{border: "none"}} className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {filteredProducts.map((product) => (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
