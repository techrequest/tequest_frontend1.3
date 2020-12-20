import { Container } from '@material-ui/core';
import React from 'react';

function  SideBarMenu(props) {

    return(
        <Container align="left">
            <div className="sidebar">
                        <div className="sidebar-widget category">
                            <h2 className="title">Service Categories</h2>
                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-female"></i>New Creations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-building"></i>Construction</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-battery-half"></i>Installation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-cogs"></i>Repairs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-user-plus"></i>Management</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-street-view"></i>Deliveries</a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>


            <div className="sidebar-widget brands">
                <h2 className="title">Our Brands</h2>
                <ul>
                    <li><a href="#">Nulla </a><span>(45)</span></li>
                    <li><a href="#">Curabitur </a><span>(34)</span></li>
                    <li><a href="#">Nunc </a><span>(67)</span></li>
                    <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                    <li><a href="#">Fusce </a><span>(89)</span></li>
                    <li><a href="#">Sagittis</a><span>(28)</span></li>
                </ul>
            </div>

            <div className="sidebar-widget tag">
                <h2 className="title">Tags Cloud</h2>
                <a href="#">Lorem ipsum</a>
                <a href="#">Vivamus</a>
                <a href="#">Phasellus</a>
                <a href="#">pulvinar</a>
                <a href="#">Curabitur</a>
                <a href="#">Fusce</a>
                <a href="#">Sem quis</a>
                <a href="#">Mollis metus</a>
                <a href="#">Sit amet</a>
                <a href="#">Vel posuere</a>
                <a href="#">orci luctus</a>
                <a href="#">Nam lorem</a>
            </div>
            </Container>
    )
    
}

export default SideBarMenu;