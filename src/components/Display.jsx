import React, {Component} from "react";

class Display extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="display">
            <span>{this.props.result}</span>
            </div>
        );
    }
}

export default Display;