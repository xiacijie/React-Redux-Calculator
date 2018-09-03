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
                {value: "7", handle: this.addDigit},
                {value: "8", handle: this.addDigit},
                {value: "9", handle: this.addDigit},
                {value: "✖", handle: this.multiply, functional: true},
                {value: "4", handle: this.addDigit},
                {value: "5", handle: this.addDigit},
                {value: "6", handle: this.addDigit},
                {value: "-", handle: this.minus, functional: true},
                {value: "1", handle: this.addDigit},
                {value: "2", handle: this.addDigit},
                {value: "3", handle: this.addDigit},
                {value: "+", handle: this.plus, functional: true},
                {value: "+/-", handle: this.negate, functional: true},
                {value: "0", handle: this.addDigit},
                {value: ".", handle: this.addDigit, functional:true},
                {value: "=", handle: this.equal, functional: true}
            ],
            stack: [],
            operatorStack: [],
            opertatorState: false
        }
     
    }

    // Display result, any input will overwrite the current display
    resultMode = true;
    operatorMode = true;

    getStack = () =>{
        const {stack} = this.state;
        const length = stack.length;
        return {stack,length};
    }

    componentDidMount = () =>{
        const {stack} = this.getStack();
        const newStack = stack.slice(0);
        newStack.push("0");
        this.setState({stack:newStack});
    }

    addDigit = (digit) =>{
        const {stack,length} = this.getStack();
        let lastNum = stack[length - 1]; // last number in the stack
        if (this.resultMode){
            lastNum = "";
            this.resultMode = false;
        }

        // add dot
        if (digit == "."){
            // already has the dot
            if (lastNum.indexOf(".") > -1){
                return;
            }

            if (lastNum == ""){
                lastNum += "0";
            }
        }


        lastNum += String(digit);

        const newStack = stack.slice(0);
        newStack[length - 1] = lastNum;
        this.setState({stack: newStack});

    }

    

    negate = () =>{
        const {stack,length} = this.getStack();
        let lastNum = stack[length - 1];
        if (lastNum == 0){
            return;
        }
        
        lastNum = String(-lastNum);
        

        const newStack = stack.slice(0);
        newStack[length - 1] = lastNum;
        this.setState({stack:newStack});
       
    }

    toPercentage = () =>{
       const {stack, length} = this.getStack();
       let lastNum = stack[length-1];
       if (lastNum == "0"){
           return;
       }

       lastNum = String(lastNum / 100);
       const newStack = stack.slice(0);
       newStack[length-1] = lastNum;
       this.setState({stack: newStack});
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
        this.setState({stack:["0"]});
        this.resultMode = true;
    }
    

    render() {
        const {stack} = this.state;
        const length = stack.length;
        const show = stack[length-1];
        return (
        <div className="calculator">
            <Display result={show}/>
            <ButtonArea buttons={this.state.buttons}/>
        </div>
        );
    }
}

export default Calculator;
