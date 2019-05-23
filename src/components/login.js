import React from 'react';
import Header from './Header.js'
import '../index.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';
class LogIn extends React.Component{
    render(){
        return(
            <section>
            



           <Header/>
         
            <div className="loginConOne">
            <Link exact to="/login" className="signStyle">
            <p>Sign in</p>
            </Link> 
            <Link to="/Register" className="registerStyle" >
            <p>Sign up</p>
            </Link> 
            </div>
            <div className="loginConTwo">
           <p> WELCOME,Please Login</p>
            </div>
            <form className="formStyle">
  <div class="form-group ">
    <label for="exampleInputEmail1" className="labelStyle">Email </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
 
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="labelStyle" >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check labelStyle">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Keep me connected</label>
  </div>
  <button type="submit" class="btn btn-primary loginButton">Login</button>
</form>
<Footer/>
<Link to="/Register">
Register
</Link>
            </section>
        )
    }
}
export default LogIn;