import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './components/login';
import RoutersComponent from './RoutersComponent.js';
import SideBar from './components/SideBar.js';
import './index.css';

// import * as serviceWorker from './serviceWorker';

export default class Home extends React.Component{
    render(){
        return(
            <div>
            <SideBar/>
           
            </div>
        )
    }
}

ReactDOM.render(<RoutersComponent/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
