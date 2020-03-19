import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class About extends Component{
    render(){
        const postId = 5;
        return(
            <div>
            <h2>About</h2>
            <Link to={`/post/${postId}`}>Go to Post</Link>
            </div>
        )
    }
}
export default About