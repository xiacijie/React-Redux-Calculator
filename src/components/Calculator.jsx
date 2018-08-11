import React, { Component } from 'react';
import Display from "./Display";


class Calculator extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div className="calculator">
            <Display/>
        </div>
        );
    }
}

export default Calculator;
