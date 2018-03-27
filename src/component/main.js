import React from 'react';
import {NavLink } from 'react-router-dom';
import '../App.css';

function Main() {
        return (
        <React.Fragment>
         <NavLink to="/" className="formlink" activeClassName="active">Sign-In</NavLink>
         <NavLink to="/signup" className="formlink" activeClassName="active">Sign-Up</NavLink>
        </React.Fragment>);
      }

export default Main;