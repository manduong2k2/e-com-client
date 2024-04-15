// src/components/SignUp.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/bootstrap.min.css';
import '../../css/style.css';
const SignUp = () => {
    const [fullname, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        const image=document.getElementById('accImage').files[0];
        const formData = new FormData();
            formData.append('fullname', fullname);
            formData.append('image', image);
            formData.append('username', username);
            formData.append('email', email);
            formData.append('password', password);
        try {
            const response = await axios.post('http://jul2nd.ddns.net/api/signup', formData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            window.location.href='/login';
            
        } catch (error) {
            setError('Server errror');
            console.log('Message : '+error.response.data.message);
        }
    };

    return (
        <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
              Chào mừng bạn đến với <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>E-Com</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
              E-Com Website cao cấp hàng đầu tại Việt Nam.
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div style={{ display: 'flex', justifyContent: 'center' }} className="card-body px-4 py-5 px-md-5">
            <form onSubmit={handleSignup}>
                <h1 className="mb-3 h3 text-center">Sign up</h1>
                <div className="form-outline mb-4">
                    <input 
                    id="form3Example3"
                    placeholder="Full Name"
                    required
                    className="form-control" 
                    type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="form-outline mb-4">
                    <input id="form3Example3"
                    placeholder="Username"
                    required
                    className="form-control"
                    type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-outline mb-4">
                    <input id="form3Example3"
                    placeholder="Email"
                    required
                    className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-outline mb-4">
                    <label  style={{ color: "#ccc" }}>Image: </label>
                    <input  style={{ color: "#ccc" }} type="file" id='accImage' />
                </div>
                <div className="form-outline mb-4">
                    <input name="password"
                    id="form3Example4"
                    className="form-control"
                    placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <div>{error}</div>}
                <button className='btn btn-primary btn-block mx-auto d-block mb-4'
                   type="submit">Sign Up</button>
                <div  className="text-center">
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                  </div> 
            </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default SignUp;