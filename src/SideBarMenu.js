import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Link } from 'react-router-dom';

function  SideBarMenu(props) {

    return(
        <Container align="left">
            <div className="sidebar">
                <div className="sidebar-widget category">
                    <h2 className="title">Service Categories</h2>
                    <nav className="navbar bg-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/create" className="nav-link" > <i className="fa fa-female">
                            </i>New Creations</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/construct" className="nav-link" > <i className="fa fa-building"></i>Construction</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/install" className="nav-link" > <i className="fa fa-battery-half"></i>Installation</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/repair" className="nav-link" > <i className="fa fa-cogs"></i>Repairs</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/manage" className="nav-link" > <i className="fa fa-user-plus"></i>Management</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/deliver" className="nav-link" > <i className="fa fa-street-view"></i>Deliveries</Link>
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