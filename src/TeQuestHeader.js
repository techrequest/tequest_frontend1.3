import React from 'react';
import logo from './images/logo.jpg'

function TeQuestHeader(){
  return(
      <div>
        <h1>
           <img src={logo} className="App-logo rounded mx-auto " alt="logo"/>
           TeQuest - Your Service Provider
        </h1>
        <hr></hr>
        <h4>
          A platform to bring together all kinds of Services and Service Providers from all over the World!  
        </h4>
      </div>
  )
}

export default TeQuestHeader;