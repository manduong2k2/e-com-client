// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    function setCookie(name, value, options = {}) {
        options = {
          path: '/',
          ...options
        };
        if (process.env.NODE_ENV === 'production') {
          options.secure = true; // Ensure secure flag for HTTPS in production
        }
        document.cookie = `${name}=${value}; ${Object.entries(options).map(([key, val]) => `${key}=${val}`).join('; ')}`;
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://jul2nd.ddns.net/api/login', {
                email,
                password
            });
            console.log(response)
            if (response.status==200 && response.data.token) {
                const token = response.data.token;
                
                const decodedToken = jwtDecode(token);
                
                console.log('Login successful!');

                setCookie('token', token);
                setCookie('name', decodedToken.name);
                setCookie('image', decodedToken.image);
                

                window.location.href='/';

              } else {
                setError('Invalid email or password. Please try again.');
                console.log('Login failed:', response.data);
              }
            
        } catch (error) {
            setError('Invalid email or password. Please try again.');
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <div>{error}</div>}
                <button type="submit">Login</button>
            </form>
            <h2>Doesn't have an account? <Link to='/signup'>Sign Up</Link></h2>
        </div>
    );
};

export default Login;
