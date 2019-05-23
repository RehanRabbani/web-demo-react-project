import React from 'react';
import '../index.css';
import Switch from './Switch';

class Header extends React.Component{
    render(){
        return(
            <div className="styleHeader">
            <span className="styleLogo"><i class="fab fa-bootstrap"></i></span>
            <Switch/>
            </div>

        )
    }
}
export default Header;