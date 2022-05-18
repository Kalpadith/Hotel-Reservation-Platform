import React, { Component } from 'react'
import { Form, Alert } from "react-bootstrap";
import styled from "styled-components";
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
`;
    export default class home extends Component {

    render(){

      return( 
        <div className="p-4 box" style={{width: "70%", margin: "100px auto" }}>
      <form>
        
        <div className="d-grid gap-2">
        <Button variant="primary" type="Submit"><a href="/LoginA" style={{ textDecoration: 'none', color: 'white' }}>Login as Administrator</a></Button>
        </div>
        <br></br>
        <div className="d-grid gap-2">
        <Button variant="primary" type="Submit"><a href="/LoginH"style={{ textDecoration: 'none', color: 'white' }}>Login as Hotel Owner</a></Button>
        </div>
        <br></br>
        <div className="d-grid gap-2">
        <Button variant="primary" type="Submit"><a href="/Login" style={{ textDecoration: 'none', color: 'white' }}>Login as customer</a></Button>
        </div>

    </form>
    </div>
    )

}

}