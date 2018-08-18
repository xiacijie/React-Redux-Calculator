import React, { Component } from 'react';
import Display from "./Display";
import ButtonArea from "./ButtonArea";
import Stack from "../structure/Stack";


class Calculator extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            buttons:[
                {value: "AC", handle: this.clearAll, functional:true,},
                {value: "C", handle: this.clearCurrent, functional: true},
                {value: "%", handle: this.toPercentage, functional: true},
                {value: "➗", handle: this.clearAll, functional: true},
                {value: 7, handle: this.addDigit},
                {value: 8, handle: this.addDigit},
                {value: 9, handle: this.addDigit},
                {value: "✖", handle: this.multiply, functional: true},
                {value: 4, handle: this.addDigit},
                {value: 5, handle: this.addDigit},
                {value: 6, handle: this.addDigit},
                {value: "-", handle: this.minus, functional: true},
                {value: 1, handle: this.addDigit},
                {value: 2, handle: this.addDigit},
                {value: 3, handle: this.addDigit},
                {value: "+", handle: this.plus, functional: true},
                {value: "+/-", handle: this.negate, functional: true},
                {value: 0, handle: this.addDigit},
                {value: ".", handle: this.addDigit, functional:true},
                {value: "=", handle: this.equal, functional: true}
            ],
            stack: new Stack(),
            operatorStack: new Stack(),
            opertatorState: false
        }
     
    }

    addDigit = (digit) =>{
        
    }

    negate = () =>{

       
    }

    toPercentage = () =>{
       
    }

    divide = () =>{

    }

    multiply = () =>{

    }

    plus = () =>{

    }

    minus = () =>{

    }

    equal = () =>{
       
    }

    clearCurrent = () =>{

    }

    clearAll = () =>{
        this.setState({stack:[]});
    }
    

    render() {
        const stack = this.state.stack;
        const length = stack.length;
        const show = length >0 ? stack[length-1]: "0";
        return (
        <div className="calculator">
            <Display result={show}/>
            <ButtonArea buttons={this.state.buttons}/>
        </div>
        );
    }
}

export default Calculator;
