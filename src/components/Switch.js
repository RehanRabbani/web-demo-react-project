import React from 'react';
import {Link} from  'react-router-dom';
import '../index.css';

class Switch extends React.Component{
    render(){
        return(
            <div className="switching">

<label class="switch">
<input type="checkbox"/>
<span class="slider round"></span>
</label>

</div>

        )
    }
}
export default Switch;