import React, { Component } from 'react';
import Display from "./Display";
import ButtonArea from "./ButtonArea";
import {connect} from "react-redux";
import * as actionTypes from "../actions/action";
import {buttons} from "../config/buttonConfig";

class Calculator extends Component {
    
    constructor(props){
        super(props);
        this.state = {}
     
    }

    componentDidMount = () =>{
        this.props.initialize();
    }
    

    render() {
       
        return (
        <div className="calculator">
            <Display result={this.props.show}/>
            <ButtonArea p={this.props} buttons={buttons}/>
        </div>
        );
    }

}

const mapStateToProps = state =>{
    console.log(state);
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
