import React, { Component } from 'react';
import Display from "./Display";
import ButtonArea from "./ButtonArea";
import {connect} from "react-redux";
import * as actionTypes from "../actions/action";

class Calculator extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            buttons:[
                {value: "AC", handle: this.props.initialize, functional:true,},
                {value: "C", handle: this.props.clearCurrent, functional: true},
                {value: "%", handle: this.props.toPercentage, functional: true},
                {value: "➗", handle: this.props.divide, functional: true},
                {value: "7", handle: this.props.addDigit},
                {value: "8", handle: this.props.addDigit},
                {value: "9", handle: this.props.addDigit},
                {value: "✖", handle: this.props.multiply, functional: true},
                {value: "4", handle: this.props.addDigit},
                {value: "5", handle: this.props.addDigit},
                {value: "6", handle: this.props.addDigit},
                {value: "-", handle: this.props.minus, functional: true},
                {value: "1", handle: this.props.addDigit},
                {value: "2", handle: this.props.addDigit},
                {value: "3", handle: this.props.addDigit},
                {value: "+", handle: this.props.plus, functional: true},
                {value: "+/-", handle: this.props.negate, functional: true},
                {value: "0", handle: this.props.addDigit},
                {value: ".", handle: this.props.addDigit, functional:true},
                {value: "=", handle: this.props.equal, functional: true}
            ],
            stack: [],
            operator: null,
            
        }
     
    }

    componentDidMount = () =>{
        this.props.initialize();
    }
    

    render() {
       
        return (
        <div className="calculator">
            <Display result={this.props.show}/>
            <ButtonArea buttons={this.state.buttons}/>
        </div>
        );
    }

}

const mapStateToProps = state =>{
    const {stack} = state;
    const length = stack.length;
    const show = stack[length-1];
    return {
        show
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        addDigit: (value) =>{
            dispatch({type: actionTypes.ADDDIGIT,value:value});
        },
        negate: () =>{
            dispatch({type: actionTypes.NEGATE});
        },
        toPercentage: () =>{
            dispatch({type: actionTypes.TOPERCENTAGE});
        },
        plus: () =>{
            dispatch({type: actionTypes.PLUS});
        },
        minus: () =>{
            dispatch({type: actionTypes.MINUS});
        },
        divide: () =>{
            dispatch({type: actionTypes.DIVIDE});
        },
        multiply: () =>{
            dispatch({type:actionTypes.MULTIPLY});
        },
        clearCurrent: () =>{
            dispatch({type:actionTypes.CLEARCURRENT});
        },
        initialize: () =>{
            dispatch({type:actionTypes.CLEARALL});
        },
        equal: ()=>{
            dispatch({type:actionTypes.EQUAL});
        }
        
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Calculator);
