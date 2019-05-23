import React from 'react';
import Header from './Header.js'
import '../index.css';
import Footer from './Footer';
import {NavLink,Link} from 'react-router-dom';

class Register extends React.Component{
    render(){
        return(
            <section>
            



           <Header/>
         
            <div className="loginConOne">
            <NavLink exact to="/login" className="signStyle">
            <p >Sign in</p>
            </NavLink> 
            <NavLink to="/Register" className="registerStyle" >
            <p>Sign up</p>
            </NavLink> 
            </div>
            <div className="loginConTwo">
           <p> WELCOME,Please Register</p>
            </div>
            <form className="formStyle">
        <div class="form-group ">
    <label for="exampleInputEmail12" className="labelStyle">Name </label>
    <input type="text" class="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" />
 
  </div>
  <div class="form-group ">
    <label for="exampleInputEmail1" className="labelStyle">Email </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
 
  </div>
  <div class="form-group ">
    <label for="exampleInputEmail13" className="labelStyle">Mobile </label>
    <input type="number" class="form-control" id="exampleInputEmail13" aria-describedby="emailHelp" />
 
  </div>
  <div class="form-group ">
    <label for="exampleInputEmail14" className="labelStyle">City </label>
    <input type="text" class="form-control" id="exampleInputEmail14" aria-describedby="emailHelp" />
 
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="labelStyle" >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
   
  <div class="form-group form-check labelStyle">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Keep me connected</label>
  </div>
  <button type="submit" class="btn btn-primary RegisterButton">Register</button>
  
</form>

<Footer/>

            </section>
        )
    }
}
export default Register;