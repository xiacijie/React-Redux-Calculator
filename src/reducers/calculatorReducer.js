import * as actionTypes from "../actions/action";

const initialState = {
    stack: ["0"],
    operator: null,
    resultMode: true,
    operatorMode: false
}

//Helper function
const getStack = (state) =>{

    const {stack,operator} = state;
    const length = stack.length;
    return {stack,length, operator};

}


// Dispatch functions
const setOperator = (op, state) =>{
    const newState = Object.assign({},state);
    const {stack,length} = getStack(newState);
    let {operator} = getStack(newState);
    
    if (length == 1){
        newState.operator = op;
        newState.operatorMode = true;
        newState.resultMode = false;
    }
    else if (length == 2){
        equal(state);
        operator = op;
        newState.resultMode = false;
        newState.operatorMode = true;
    }

    return newState;
}

const addDigit =(digit, state) =>{
    const {stack,length} = getStack(state);
    const newState = Object.assign({}, state);
    const newStack = stack.slice(0);
    
    if (newState.operatorMode){
        if (newState.resultMode){
            newStack.pop();
        }
        newStack.push("");
        newState.operatorMode = false;
        newState.resultMode = false;
    }
    let lastNum = newStack[newStack.length - 1]; // last number in the stack
    if (newState.resultMode){
        lastNum = "";
        newState.resultMode = false;
    }

    // add dot
    if (digit == "."){
        // already has the dot
        if (lastNum.indexOf(".") > -1){
            return state;
        }

        if (lastNum == ""){
            lastNum += "0";
        }
    }


    lastNum += String(digit);

    
    newStack[newStack.length - 1] = lastNum;
    newState.stack = newStack;
    return newState;
        
}



const negate = (state) =>{
    const {stack,length} = getStack(state);
    const newState = Object.assign({},state);
    let lastNum = stack[length - 1];
    if (lastNum == 0){
        return state;
    }
    
    lastNum = String(-lastNum);
    

    const newStack = stack.slice(0);
    newStack[length - 1] = lastNum;
    
    newState.stack = newStack;


    return newState;
   
}

const toPercentage = (state) =>{
    const newState = Object.assign({},state);
    const {stack, length} = getStack(state);
    let lastNum = stack[length-1];
    if (lastNum == "0"){
        return newState;
    }

    lastNum = String(lastNum / 100);
    const newStack = stack.slice(0);
    newStack[length-1] = lastNum;
    newState.stack = newStack;
    return newState;
    
 }

 const equal = (state) =>{
    const newState = Object.assign({},state);
    const {stack,operator,length} = getStack(state);
    if (length == 1){
        return state;
    }
    const newStack = stack.slice(0);
    const op2 = newStack.pop();
    const op1 = newStack.pop();
    let result;
    if (operator == "plus"){
        result = Number(op1) + Number(op2);
    }
    else if (operator == "minus"){
        result = Number(op1) - Number(op2);
    }
    else if (operator == "multiply"){
        result = Number(op1) * Number(op2);

    }
    else{
        result = Number(op1) / Number(op2);
    }
    newStack.push(result);
    newState.resultMode = true;
    newState.operatorMode = false;
    newState.stack = newStack;
    return newState;

 }

const divide = (state) =>{
    return setOperator("divide",state);
}

const multiply = (state) =>{
    return setOperator("multiply",state);
}

const plus = (state) =>{
   return setOperator("plus",state); 
}

const minus = (state) =>{
    return setOperator("minus",state);
}


const clearCurrent = (state) =>{
    const newState = Object.assign({},state);
    const {stack,length} = getStack(state);
    const newStack = stack.slice(0);
    if (length > 0){
        newStack.pop();
        newStack.push(0);
    }
    newState.stack = newStack;
    newState.operatorMode = true;
    newState.resultMode = true;
    return newState;
}

const clearAll = () =>{
    const newState ={
        stack: ["0"],
        operator: null,
        resultMode: true,
        operatorMode: false
    }
    
    return newState;
}

const reducer = (state = initialState, action) =>{
    if (action.type === actionTypes.ADDDIGIT){
        return addDigit(action.value,state);
    }

    if (action.type === actionTypes.NEGATE){
        return negate(state);
    }

    if (action.type === actionTypes.TOPERCENTAGE){
        return toPercentage(state);
    }

    if (action.type === actionTypes.EQUAL){
        return equal(state);
    }

    if (action.type === actionTypes.PLUS){
        return plus(state);
    }

    if (action.type === actionTypes.MINUS){
        return minus(state);
    }

    if (action.type === actionTypes.DIVIDE){
        return divide(state);
    }

    if (action.type === actionTypes.MULTIPLY){
        return multiply(state);
    }

    if (action.type === actionTypes.CLEARCURRENT){
        return clearCurrent(state);
    }

    if (action.type === actionTypes.CLEARALL){
        return clearAll();
    }

    return state;
}

export default reducer;





