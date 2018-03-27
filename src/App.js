import React, { Component } from 'react';
import {ListItems} from './component/const';
import {NavLink } from 'react-router-dom';
import logo from './images/logo.png';

class App extends Component {
  render() {
    return <div className="body">
        <header className="header">       
        <img className="logo" src={logo}/>        
    <nav>
    <NavLink to="/dashboard" className="link" activeClassName="active">{ListItems.home}</NavLink>
    <NavLink to="/dashboard/services" className="link" activeClassName="active">{ListItems.services}</NavLink>
    <NavLink to="/dashboard/portfolio" className="link" activeClassName="active">{ListItems.portfolio}</NavLink>
    <NavLink to="/dashboard/about" className="link" activeClassName="active">{ListItems.about}</NavLink>
    <NavLink to="/dashboard/clients" className="link" activeClassName="active">{ListItems.clients}</NavLink>
    <NavLink to="/dashboard/price" className="link" activeClassName="active">{ListItems.price}</NavLink>
    <NavLink to="/dashboard/contact" className="link" activeClassName="active">{ListItems.contact}</NavLink>
 </nav>
    </header>
    </div>;
  }
}

export default App;
