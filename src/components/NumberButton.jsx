import React, {Component} from "react";



class NumberButton extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="numberButton button"><span>{this.props.value}</span></div>
        );
    }
    

}


export default NumberButton;