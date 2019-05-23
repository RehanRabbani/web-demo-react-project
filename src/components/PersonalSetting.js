import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import Switch from './Switch.js'
import us from '../../src/assets/us.png';

class PersonalSetting extends React.Component{
    render(){
        return(
            <div className="GParentSideNav">
           <span className="sideNavParent">
          <section className="sideCon1">
         <Link to="/PersonalSetting" className="linkStyle"> <span><i class="fas fa-gavel"></i></span></Link>
          <span><i class="far fa-star"></i></span>
          <span><i class="fas fa-search"></i></span>
          <span><i class="fas fa-plus"></i></span>
          </section>
       
       <section className="sideCon2">
       <img src={us} alt="user" id='image-preview' className="flag-size"   />
       <span><i class="far fa-bell"></i></span>
          <span><i class="fas fa-bars"></i></span>
          <span className="sideNavSwitch"> <Switch/></span>
          <span><i class="fas fa-user-circle"></i></span>
       </section>
           </span>
          {/*  <Link to="/login">login</Link>
        <Link to="/Register"> Register</Link>*/}
        <div className="parentpersonal">
        <p>Personal Setting</p>
        <p>PROFILE</p>  
        <label>Profile Image</label>
        <label id="#bb" className="filelabel"><span><i class="fas fa-cloud-upload-alt"></i></span> Drop files to attach, or Browse
        <input type="file" id="File"   size="60" />
        </label> 
        </div>
            </div>
        )
    }
}
export default PersonalSetting;