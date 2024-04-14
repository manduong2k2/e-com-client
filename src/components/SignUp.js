// src/components/SignUp.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Full Name:</label>
                    <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" id='accImage' />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <div>{error}</div>}
                <button type="submit">Sign Up</button>
                <h2>Already have an account? <Link to='/login'>Login</Link></h2>
            </form>
        </div>
    );
};

export default SignUp;
