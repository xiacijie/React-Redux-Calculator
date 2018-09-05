import React from 'react';
import ReactDOM from 'react-dom';
import './css/view.css'
import './css/index.css';
import './css/calculator.css';
import  Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/calculatorReducer";

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><Calculator /></Provider>, document.getElementById('root'));
registerServiceWorker();
