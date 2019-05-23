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
        <p className="per1">Personal Setting</p>
        <p className="per2">PROFILE</p>  
        <label className="labelStyle" >Profile Image</label>
        <label id="#bb" className="filelabel"><span><i class="fas fa-cloud-upload-alt"></i></span> Drop files to attach, or Browse
        <input type="file" id="File"   size="60" />
        </label> 

        <form className="labelStyle">
  <div class="form-row">
    <div class="form-group col-md-4 formPer">
      <label for="inputEmail1">Name</label>
      <input type="text" class="form-control" id="inputEmail1" />
    </div>
    <div class="form-group col-md-4 formPer">
      <label for="inputPassword1">Last Name</label>
      <input type="text" class="form-control" id="inputPassword1" />
    </div>
  </div>
 
  <div class="form-group col-md-8 styleformpersonal formPer">
  <label for="inputEmail2">Email</label>
  <input type="email" class="form-control" id="inputEmail2" />
</div>
  
<div class="form-row">
    <div class="form-group col-md-4 formPer">
      <label for="inputEmail3">Mobile</label>
      <input type="tel" class="form-control" id="inputEmail3" />
    </div>
    <div class="form-group col-md-4 formPer">
    <label for="inputState">Current occupation</label>
    <select id="inputState" class="form-control">
      <option selected>Choose...</option>
      <option>Entepreneur</option>
    </select>
  </div>
  </div>
  <p className="per2">LEGAL/FISCAL DETAILS</p> 
    
<div class="form-row">
<div class="form-group col-md-4 formPer">
<label for="inputState">Role</label>
<select id="inputState" class="form-control">
  <option selected>Choose...</option>
  <option>Buyer</option>
</select>
</div>
<div class="form-group col-md-4 formPer">
  <label for="inputEmail4">RFC</label>
  <input type="text" class="form-control" id="inputEmail4"/>
</div>

</div>

<div class="form-group col-md-8 styleformpersonal formPer">
  <label for="inputEmail5">Legal Name</label>
  <input type="text" class="form-control" id="inputEmail5" />
</div>
  
<div class="form-group col-md-8 styleformpersonal formPer">
  <label for="inputEmail6">Address</label>
  <input type="text" class="form-control" id="inputEmail6" />
</div>

<div class="form-group col-md-8 styleformpersonal formPer">
  <label for="inputEmail7">Neighbarhood</label>
  <input type="text" class="form-control" id="inputEmail7" />
</div>
  
<div class="form-row">
<div class="form-group col-md-4 formPer">
  <label for="inputEmail8">City</label>
  <input type="text" class="form-control" id="inputEmail8" />
</div>
<div class="form-group col-md-4 formPer">
  <label for="inputEmail9">Estate</label>
  <input type="text" class="form-control" id="inputEmail9" />
</div>
</div>
  
<div class="form-row">
<div class="form-group col-md-4 formPer">
  <label for="inputEmail10">Country</label>
  <input type="text" class="form-control" id="inputEmail10" />
</div>
<div class="form-group col-md-4 formPer">
  <label for="inputEmail11">ZIP</label>
  <input type="number" class="form-control" id="inputEmail11" />
</div>
</div>

<p className="per2">PREFERRED LANGUAGE</p> 
<div class="form-row">
<div class="form-group col-md-4 formPer">
  <label for="inputEmail12">App language</label>
  <input type="text" class="form-control" id="inputEmail12"/>
</div>

</div>
<p className="per2">TIMEZONE</p> 
<div class="form-row">
<div class="form-group col-md-4 formPer">
  <label for="inputEmail13">Time format</label>
  <input type="number" class="form-control" id="inputEmail13" />
</div>

</div>
</form>



        </div>
            </div>
        )
    }
}
export default PersonalSetting;