import logo from './images/logo.jpg'
import React from 'react';
import Jumbotron from './Jumbotron';
import { Container } from '@material-ui/core';
import TeQuestHeader from './TeQuestHeader';

function NavBar(props) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <img src={logo} className="App-logo rounded mx-auto d-block" alt="logo"/>
        
        <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="index.html"><b>Home</b></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="ServiceProvidersList.js"><b>Service Providers List</b></a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="ServiceCategories.js" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <b>Service Categories</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <a className="dropdown-item" href="CategoryCreate.js"><b>Create</b></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="CategoryConstruct.js"><b>Construct</b></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="CategoryInstall.js"><b>Install</b></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="CategoryRepair.js"><b>Repair</b></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="CategoryManage.js"><b>Manage</b></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="CategoryDeliver.js"><b>Deliver</b></a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="ProviderPromotions.js"><b>Promotions</b></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="ContactUs.js"><b>Contact Us</b></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="FAQ.js"><b>FAQ</b></a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="MyAccountDetails.js" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <b>My Account</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <a className="dropdown-item" href="LoginPage.js"><b>Login</b></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="UserRegisterpage.js"><b>Register</b></a>
                </div>
            </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
    
            </div>
        </div>

        
        <div align="center" className="fixed-bottom text-light bg-dark">
        Copyright &copy; <a href='index.html' className="text-light bg-dark"> TeQuest </a> - Your Service Provider. All Rights Reserved
        </div> 
    </nav>

    </div>
  );
  
}    
export default NavBar;
