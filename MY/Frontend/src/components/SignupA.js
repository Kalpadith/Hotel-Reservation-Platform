import React, { Component } from 'react'
import axios from 'axios';
//import {BrowserRouter} from 'react-router-dom';
//import NavBar from './NavBar';


//import { useState, useEffect } from 'react';




export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
            email: "",
            password: "",
            emailError: "",
            passwordError: ""
        }
    }


    validate = () => {

        
        let emailError = "";
        let passwordError = "";
        

        
        if (!this.state.email) {
            emailError = "Date type cannot be blank"
        }
        if (!this.state.email === "admin@gmail.com" ) {
            emailError = "You are not admin"
        }
        
        if (!this.state.password) {
            passwordError = "Password cannot be blank"
        }
        if (!this.state.password === "admin123") {
            passwordError = "Your password is not matching with admin password"
        }
        

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    };


    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {

            const { email, password } = this.state;

            const data = {
                
                email: email,
                password: password
                
            }

            console.log(data)


            axios.post("http://localhost:8052/api", data).then((res) => {
                if (res.data.success) {
                    this.setState({
                        
                        email: "",
                        password: "",
                        emailError: "",
                        passwordError: ""
                    })
                }
            })
        }
    }
    
    render() {
        return (

           
            <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                    <form className="needs-validation" novalidate>
                       


                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Email</label>
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.emailError}
                            </div>
                        </div>

                        

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Password</label>
                            <input type="text"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.passwordError}
                            </div>
                        </div>

                       



                      


                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; save
                        </button>
                        <br></br>
                        
                              
                    </form>

                </div>
        )
    }
}


