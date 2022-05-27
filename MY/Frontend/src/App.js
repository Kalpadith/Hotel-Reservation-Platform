import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';

import Viewrooms from './components/Viewrooms';
import BookRooms from './components/Bookrooms';
import Payment from './components/Payment';
import Taxi from './components/Taxi';
import ViewHotel from './components/ViewHotel';
import AddOrUpdateHotel from './components/AddOrUpdateHotel';
import BookingView from './components/BookingView';
import Home from './components/Home';
import Signup from "./components/Signup.js";
import Login from "./components/login.js";
import SignupH from "./components/signupH.js";
import LoginH from "./components/loginH.js";
import LoginA from "./components/loginA.js";
import ViewHotel_Customer from './components/viewHotel_Customer';

export default class App extends Component {
  render() {
      return (
        
<Router>
     <Routes>
        
          <Route exact path='/' element={<Home/>} />

          <Route path='/Login'  element={<Login/>} />
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/LoginH'  element={<LoginH/>} />
            <Route path='/signupH' element={<SignupH/>}/>
            <Route path='/LoginA'  element={<LoginA/>} />
         
          <Route path="/Viewrooms" element={<Viewrooms/>}></Route>
          <Route path="/ViewHotel_Customer" element={<ViewHotel_Customer/>}></Route>

          <Route path="/Bookrooms" element={<BookRooms/>}></Route>
          <Route path="/payment" element={<Payment/>}></Route>
          <Route path="/Taxi" element={<Taxi/>}></Route>
          <Route path="/hotel" element={<ViewHotel/>}></Route>
          <Route path="/addUpdate" element={<AddOrUpdateHotel/>}></Route>
          <Route path="/viewbooking" element={<BookingView/>}></Route>

         

          </Routes>
          </Router>

)
}
}