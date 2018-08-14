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
            show:100,
            cache: []
        }
     
    }

    addDigit = () =>{

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

    }
    

    render() {
        return (
        <div className="calculator">
            <Display result={this.state.show}/>
            <ButtonArea buttons={this.state.buttons}/>
        </div>
        );
    }
}

export default Calculator;
