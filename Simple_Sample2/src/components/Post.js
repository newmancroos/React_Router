import React, {Component} from 'react';
class Post extends Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <div>
              Input : {this.props.match.params.id}
            </div>
            // Similar to componentDidMount and componentDidUpdate:
            // useEffect(() => {
            //     // Update the document title using the browser API
            //     document.title = `You clicked ${count} times`;
            // });
        )
    }
}
export default Post