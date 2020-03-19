import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import  { Redirect } from 'react-router-dom'
class Container extends Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <div>
               {/* <Link to="/about">About</Link> */}
               My Container
            </div>
        )
    }
}
export default Container