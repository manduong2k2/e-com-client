// src/components/SignUp.js

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/bootstrap.min.css';
import '../../css/style.css';
const PersonalAccount = () => {
    const [fullname, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

    useEffect(() => {
        axios.get("http://jul2nd.ddns.net/api/user", {
            headers: {
                'Authorization': "Bearer " + getCookie("token"),
            },
        }).then((response) => {
                setUsername(response.data.user.username);
                setFullName(response.data.user.fullname);
                setImage(response.data.user.image);
                setEmail(response.data.user.email);
        }).catch((error) => {
                console.error("Error fetching user:", error);
        });
    }, []);

    const handleEdit = async (e) => {
        e.preventDefault();
        const accImage = document.getElementById('accImage').files[0];
        const formData = new FormData();
        formData.append('fullname', fullname);
        formData.append('image', accImage);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        try {
            const response = await axios.patch('http://jul2nd.ddns.net/user/edit', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                alert('Đăng ký thành công ! xin mời đăng nhập');
                navigate("/login");
            }
            console.log('Message : ' + response.data.message);

        } catch (error) {
            setError('Server errror');
            console.log('Message : ' + error.response.data.message);
        }
    };

    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">

                        <div className="card bg-glass">
                            <div style={{ display: 'flex', justifyContent: 'center' }} className="card-body px-4 py-5 px-md-5">
                                <form onSubmit={handleEdit}>
                                    <h1 className="mb-3 h3 text-center">Sign up</h1>
                                    <div className="form-outline mb-4">
                                        <input
                                            
                                            placeholder="Full Name"
                                            required
                                            className="form-control"
                                            type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input 
                                            placeholder="Username"
                                            required
                                            className="form-control"
                                            type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input 
                                            placeholder="Email"
                                            required
                                            className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <img src={image} height={50} width={30}/>
                                        <label style={{ color: "#ccc" }}>Image: </label>
                                        <input style={{ color: "#ccc" }} type="file" id='accImage' />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input name="password"
                                            id="form3Example4"
                                            className="form-control"
                                            placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    {error && <div style={{ color: 'red' }}>{error}</div>}
                                    <button className='btn btn-primary btn-block mx-auto d-block mb-4'
                                        type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalAccount;
