import React, {Component} from "react";
import Button from "./Button";

class ButtonArea extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (<div className="buttonArea">
            {this.props.buttons.map(function(val){
                return (<Button 
                    handle={val.handle}
                    functional={val.functional}
                    key = {val.value}
                    value={val.value}/>);
            })}
        </div>);
    }
}

export default ButtonArea;