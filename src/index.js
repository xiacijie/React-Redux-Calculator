import React from 'react';
import ReactDOM from 'react-dom';
import './css/view.css'
import './css/index.css';
import './css/calculator.css';
import  Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
