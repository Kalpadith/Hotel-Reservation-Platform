import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
//import { useUserAuth } from "../contexts/UserAuthContext";
/*import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 20px;
  width: 100%;

  &:hover {
    background-color: white;
    color: blue;
    border: 2px solid blue;
  }
`;*/

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await Login(email, password);
      if(email === 'admin@ad.com'){
      navigate("/");
      }navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  

  /*const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };*/

  return (
    <>
      <div className="p-4 box" style={{ width: "70%", margin: "100px auto" }}>
        <h2 className="mb-3 text-center">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Link to={"/Viewrooms"} variant="primary" type="Submit">
              Log In
            </Link>
          </div>
        </Form>
        <hr />
        
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/Signup">Sign up</Link>
        </div>
        {/* <div className="p-4 box mt-3 text-center">
           <Link to="/SignupH">Login as Hotel Owner</Link>
        </div>
        <div className="p-4 box mt-3 text-center">
           <Link to="/SignupA">Login as admin</Link>
        </div> */}
        
      </div>
    </>
  );
};

export default Login;
