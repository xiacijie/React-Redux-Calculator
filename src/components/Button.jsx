import React, {Component} from "react";



class NumberButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover: false
        }
    }

    hover = () =>{
        // alert("ddd");
        this.setState(prevState => ({hover: !prevState.hover}));
    }

    render() {
        const functionalButtonStyle = {

            backgroundColor: "#EAEAEA"
        }

        const normalButtonStyle = {

            backgroundColor: "white"
        }

        if (this.state.hover){
            functionalButtonStyle.backgroundColor = "#0066ff";
            functionalButtonStyle.border = "5px #99ccff solid"
            normalButtonStyle.backgroundColor = "#DBDBDB";
            normalButtonStyle.border ="5px #C2C2C2 solid"
        }

        const style = this.props.functional ? functionalButtonStyle : normalButtonStyle;
        return (
            <div 
                onTouchStart={this.hover}
                onTouchEnd={this.hover}
                onMouseEnter={this.hover}
                onMouseLeave={this.hover}
                style={style}
                className="numberButton button">
                <span>{this.props.value}</span>
            </div>
        );
    }
    

}


export default NumberButton;