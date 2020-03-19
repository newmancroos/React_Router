import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Home extends Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <div>
                <h2>Home</h2>
                <Link to="/about">Go to About</Link>
                <button onClick={()=>{
                    //this.props.location
                    //this.props.match use extract parameter value
                     this.props.history.push('/about')  //This history comes from "Route" from App
                }}>Go to About</button>
            </div>
        )
    }
}
export default Home