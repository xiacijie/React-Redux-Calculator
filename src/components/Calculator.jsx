import React, { Component } from 'react';
import Display from "./Display";
import ButtonArea from "./ButtonArea";



class Calculator extends Component {
    
    constructor(props){
        super(props);
     
    }

    

    render() {
        return (
        <div className="calculator">
            <Display/>
            <ButtonArea/>
        </div>
        );
    }
}

export default Calculator;
