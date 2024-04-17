import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Login from "./components/user/Login";
import SignUp from "./components/user/SignUp";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "../src/layout/Navbar";
import Footer from "./layout/footer";
import AddProduct from "./components/product/AddProduct";
import AddCategory from "./components/category/AddCategory";
import AddBrand from "./components/brand/AddBrand";
import EditBrand from "./components/brand/EditBrand";
import EditProduct from "./components/product/EditProduct";
import EditCategory from "./components/category/EditCategory";
import Introduce from "./components/Introduce";
import UserList from "./components/user/UserList";
import BrandList from "./components/brand/BrandList";
import CategoryList from "./components/category/CategoryList";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/ejs@3.1.9/ejs.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>  
          <Navbar />
        </header>
        <body>
          <main>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/users" exact element={<UserList />} />
              <Route path="/brands" exact element={<BrandList />} />
              <Route path="/brand/edit/:id" exact element={<EditBrand />} />
              <Route path="/category/edit/:id" exact element={<EditCategory />} />
              <Route path="/product/edit/:id" exact element={<EditProduct />} />
              <Route path="/categories" exact element={<CategoryList />} />
              <Route path="/introduce" exact element={<Introduce />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/product/add" exact element={<AddProduct />} />
              <Route path="/category/add" exact element={<AddCategory />} />
              <Route path="/brand/add" exact element={<AddBrand />} />
            </Routes>
          </main>
          <Footer />
        </body>
      </div>
    </Router>
  );
}

export default App;
