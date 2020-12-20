import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';

const LayoutRoute = (props) => {
    return (
        <React.Fragment>
        <div>
            <NavBar extraComponent={
                <div className="d-flex">
                    <input className="form-control me-2" type="search" 
                    placeholder="Search" aria-label="Search" />
    
                    <button className="btn btn-outline-success" 
                    type="submit">Search</button>
                </div>
            }>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/about" className="btn btn-primary">About</Link>
            <Link to="/providers" className="btn btn-primary">Service Providers List</Link>
            
            </NavBar>

            <Route path={props.path} exact={props.exact} component={props.component}
            />

            

        </div>
        </React.Fragment>
    )
}

export default LayoutRoute