import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import Switch from './Switch.js'
import us from '../../src/assets/us.png';
import ireland from '../assets/ireland.png';
import italy from '../assets/italy.png';
import sweden from '../assets/sweden.png';
import malta from '../assets/malta.png';
import colombia from '../assets/colombia.png';
import portugal from '../assets/portugal.png';
import france from '../assets/france.png';
import uruguay from '../assets/uruguay.png';
import greece from '../assets/greece.png';
class StartPage extends React.Component{
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
       
        <section className="startPageStyleP">
       <div>Drag here to set row groups</div>
       <div className="startPartMain">
       <div className="startPartMainOne">
       <table class="table table-striped">
  <thead>
    <tr>
        
      <th scope="col" colSpan="3">First </th>
      <th scope="col" colSpan="2">Last</th>
      <th scope="col">Handle</th>
    </tr>
    <tr>
    <th scope="col">
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
    Handle
  
  </div>

    </th>
    <th scope="col">Handle</th>
    <th scope="col">Handle</th>
    <th scope="col">Handle</th>
    <th scope="col">Handle</th>
    <th scope="col"></th>
  </tr>
    <tr>
    <th scope="col" className="thStyle1">
    <div class="input-group input-group-sm mb-3 ">
    
    <input type="text" class="form-control formSOne" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
    <span className="StIcon1"><i class="fas fa-filter"></i></span>
  </div>
  </th>
  <th scope="col" className="thStyle">
  <div class="input-group input-group-sm mb-3 ">

  <input type="text" class="form-control formSOne" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
  <span className="StIcon1"><i class="fas fa-filter"></i></span>
</div>
</th>
<th scope="col" className="thStyle">
    <div class="input-group input-group-sm mb-3 ">
    <input type="text" class="form-control formSOne1" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />

    <span className="StIcon1 k"><i class="fas fa-filter"></i></span>
</div>
</th>
<th scope="col" className="thStyle1">
    <div class="input-group input-group-sm mb-3 ">

<input type="text" class="form-control formSOne" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
<span className="StIcon1"><i class="fas fa-filter"></i></span>
</div>
</th>
<th scope="col" className="thStyle">
    <div class="input-group input-group-sm mb-3 ">

<input type="text" class="form-control formSOne" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
<span className="StIcon1"><i class="fas fa-filter"></i></span>
</div>
</th>
<th scope="col" className="thStyle">
    <div class="input-group input-group-sm mb-3 ">

<input type="text" class="form-control formSOne" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>

</div>
</th>
  </tr>
  
  </thead>
  <tbody>
    <tr>
      
      <td>  <div class="form-check">
      <span><i class="fas fa-th"></i></span>
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
      
      Mark</div></td>
      <td>Otto</td>
      <td className="tdStyle"><img src={ireland} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
      <td>@mdo</td>
      <td><span><i class="fas fa-check"></i></span></td>
      <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
      <span><i class="fas fa-th"></i></span>
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
      
      Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={sweden} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-check"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
    <span><i class="fas fa-th"></i></span>
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
    
    Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={uruguay} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-times"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
      <span><i class="fas fa-th"></i></span>
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
      
      Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={france} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-times"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
    <span><i class="fas fa-th"></i></span>
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
    
    Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={portugal} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-check"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
    <span><i class="fas fa-th"></i></span>
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
    
    Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={colombia} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-check"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
      <span><i class="fas fa-th"></i></span>
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
      
      Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={ireland} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-times"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
    <span><i class="fas fa-th"></i></span>
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
    
    Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={france} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-times"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
    <span><i class="fas fa-th"></i></span>
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
    
    Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={malta} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-check"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
    <span><i class="fas fa-th"></i></span>
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
    
    Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={france} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-check"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
    <span><i class="fas fa-th"></i></span>
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
    
    Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={italy} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-times"></i></span></td>
    <td></td>
    </tr>
    <tr>
    <td>  <div class="form-check">
      <span><i class="fas fa-th"></i></span>
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
      
      Mark</div></td>
    <td>Otto</td>
    <td className="tdStyle"><img src={greece} alt="user" id='image-preview' className="flagSize2"   />   @mdo</td>
    <td>@mdo</td>
    <td><span><i class="fas fa-times"></i></span></td>
    <td></td>
    </tr>
    
  </tbody>
</table>
       </div>
       <div className="startPartMainTwo">
       </div>
       </div>
        </section>




            </div>
        )
    }
}
export default StartPage;