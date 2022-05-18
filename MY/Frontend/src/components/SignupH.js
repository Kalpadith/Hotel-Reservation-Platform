import React, { Component } from 'react'
import axios from 'axios';
//import {BrowserRouter} from 'react-router-dom';
//import NavBar from './NavBar';


//import { useState, useEffect } from 'react';




export default class SignupH extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            hotel: "",
            password: "",
            nameError: "",
            emailError: "",
            hotelError: "",
            passwordError: ""
        }
    }


    validate = () => {

        let nameError = "";
        let emailError = "";
        let hotelError = "";
        let passwordError = "";
        

        if (!this.state.name) {
            nameError = "Student Group_number cannot be blank"
        }
        if (!this.state.email) {
            emailError = "Date type cannot be blank"
        }
        if (!this.state.hotel) {
            hotelError = "Results cannot be blank"
        }
        if (!this.state.password) {
            passwordError = "Pannel number cannot be blank"
        }
        

        if (nameError || emailError || hotelError || passwordError) {
            this.setState({ nameError, emailError, hotelError, passwordError });
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

            const { name, email, hotel, password } = this.state;

            const data = {
                name: name,
                email: email,
                hotel: hotel,
                password: password
                
            }

            console.log(data)


            axios.post("http://localhost:8051/Owners", data).then((res) => {
                if (res.data.success) {
                    this.setState({
                        name: "",
                        email: "",
                        hotel: "",
                        password: "",
                        nameError: "",
                        emailError: "",
                        hotelError: "",
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
                            <label style={{ marginBottom: '5px' }}>Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.nameError}
                            </div>

                        </div>


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
                            <label style={{ marginBottom: '5px' }}>Hotel Namer</label>
                            <input type="text"
                                className="form-control"
                                name="hotel"
                                placeholder="Hotel Name"
                                value={this.state.phone}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.hotelError}
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


