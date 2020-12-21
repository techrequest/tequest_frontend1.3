import React from 'react';
import HomeScreen from './HomeScreen';
import logo from './images/logo.jpg'


function NavBar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${props.className}`} >
          <div className="container-fluid">
              <div className="d-flex flex-grow-1" align="left">
                {props.children}
              </div>
              {props.extraComponent}
          </div>
        
        
        <div align="center" className="fixed-bottom text-light bg-dark">
        Copyright &copy; <a href='index.html' className="text-light bg-dark"> TeQuest </a> - Your Service Provider. All Rights Reserved
        </div> 
    </nav>

    </div>
  );
  
}    
export default NavBar;
