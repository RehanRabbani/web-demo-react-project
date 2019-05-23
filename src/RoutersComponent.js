import React from 'react';
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom';
import Register from './components/Register';
import login from './components/login';
import Home from './index.js';
import SideBar from './components/SideBar';
import PersonalSetting from './components/PersonalSetting';

class RoutersComponent extends React.Component{
    render(){
        return(
            <div>
            <BrowserRouter>
            <Switch>
            <div>
            <Route exact path="/" component={Home}/>
                <Route path="/login" component={login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/SideBar" component={SideBar}/>
                <Route path="/PersonalSetting" component={PersonalSetting}/>
                </div>
                </Switch>
               
            </BrowserRouter>
            </div>
        )
    }
}
export default RoutersComponent;