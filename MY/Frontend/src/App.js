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

import Login from './components/Login';
import LoginA from './components/LoginA';
import LoginH from './components/LoginH';

import Signup from './components/Signup';
import SignupA from './components/SignupA';
import SignupH from './components/SignupH';
import ViewHotel from './components/ViewHotel';
import AddOrUpdateHotel from './components/AddOrUpdateHotel';
import BookingView from './components/BookingView';
import Home from './components/Home';
export default class App extends Component {
  render() {
      return (
        
<Router>
     <Routes>
        
          <Route exact path='/' element={<Home/>} />

          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/LoginA" element={<LoginA/>}></Route>
          <Route path="/LoginH" element={<LoginH/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/SignupA" element={<SignupA/>}></Route>
          <Route path="/SignupH" element={<SignupH/>}></Route>
          <Route path="/Viewrooms" element={<Viewrooms/>}></Route>

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