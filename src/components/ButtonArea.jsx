import React, {Component} from "react";
import NumberButton from "./NumberButton";

class ButtonArea extends Component{
    constructor(props){
        super(props);
        this.state = {
            values:[]
        }
    }

    componentDidMount(){
        const buffer = [];
        for (let i = 0 ; i < 20; i ++){
            buffer.push(i);
        }
        this.setState({values: buffer});
    }

    render(){
        return (<div className="buttonArea">
            {this.state.values.map(function(val){
                return (<NumberButton key = {val} value={val}/>);
            })}
        </div>);
    }
}

export default ButtonArea;