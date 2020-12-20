import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LayoutRoute from './LayoutRoute';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ServiceProvidersList from './ServiceProvidersList';
import SideBarMenu from './SideBarMenu';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <LayoutRoute path="/" exact={true} component={HomeScreen} />
            <LayoutRoute path="/about" exact={true} component={AboutScreen} />
            <LayoutRoute path="/serviceproviders" exact={true} component={ServiceProvidersList} />
            <LayoutRoute path="/sidebar" exact={true} component={SideBarMenu} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;