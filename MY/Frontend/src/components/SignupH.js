//import React, { Component } from 'react'
import axios from 'axios';

import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';


const SignupH = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        hotel: "",
        password: ""
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleInputChange = ({ currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };


    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const url = "http://localhost:8051/owner/owners";
            const { data: res} = await axios.post(url, data);
            navigate("/LoginH")
            console.log(res.message);
            

        }catch(error){
            if(error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500){
                    setError(error.response.data.message)

                }

        }

    }

    return(
        <div>
            <div>
            <h1>Welcome Owner</h1>
            <Link to={"/loginH"}><button type='button'>Sign in</button></Link>
            </div>

            <div>
            <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                value={data.name}
                                required
                                onChange={handleInputChange} />
                           

                        </div>


                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Email</label>
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={data.email}
                                required
                                onChange={handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Hotel Name</label>
                            <input type="text"
                                className="form-control"
                                name="hotel"
                                placeholder="Hotel Name"
                                value={data.hotel}
                                required
                                onChange={handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Password</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={data.password}
                                required
                                onChange={handleInputChange} />
                        </div>
                        {error && <div>{error}</div>}
                        <button type='submit'>Sign up</button>
                        </form>

            </div>

        </div>
        </div>
    
    )
};
export default SignupH;