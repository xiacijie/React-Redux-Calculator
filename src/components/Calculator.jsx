import React, { Component } from 'react';
import Display from "./Display";
import ButtonArea from "./ButtonArea";



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
            stack: []
        }
     
    }

    addDigit = (digit) =>{
        const {stack}  = this.state;
        const length = stack.length;
        const newStack = stack.slice(0);
        if (length == 0){
            if (digit == 0){
                return;
            }
            let buffer = "" + digit;
            newStack.push(buffer);
        }
        else{
            let buffer = newStack[length-1];
            if (buffer == 0 && digit == "0"){
                return;
            }
            buffer *= 10;
            buffer += digit;
            buffer += "";
            newStack.push(buffer);
        }
        this.setState({stack:newStack});

    }

    negate = () =>{
        const {stack} = this.state;
        const length = stack.length;
        const newStack = stack.slice(0);
        if (length != 0){
            const last = newStack[length -1];
            
            if (last != 0){
               if (last[0] != "-"){
                   newStack[length-1] = "-" + newStack[length-1];
               }
               else{
                   newStack[length-1] = newStack[length-1].slice(1);
               }
               this.setState({stack:newStack});
            }
            
        }
       
    }

    toPercentage = () =>{
        const {stack} = this.state;
        const length = stack.length;
        if (length != 0){
            const newStack = stack.slice(0);
            newStack[length-1] /= 100;
            newStack[length - 1] += "";
            this.setState({stack:newStack});

        }
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
