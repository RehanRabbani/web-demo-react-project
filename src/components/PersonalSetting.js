import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import SideBar from './SideBar';

class PersonalSetting extends React.Component{
    render(){
        return(
            <div className="PersonalParent">
           <div className="side"> <SideBar /></div>
           <section className="PersonalContent">
           <p>Personal Settings</p>
           <p>PROFILE</p>
           <div class="input-group mb-3">
 <div class="custom-file">
   <input type="file" class="custom-file-input" id="inputGroupFile02"/>
   <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
 </div>
 <div class="input-group-append">
   <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
 </div>
</div>
           </section>

            </div>
        )
    }
}
export default PersonalSetting;