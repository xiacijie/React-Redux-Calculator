import React from 'react';
import ReactDOM from 'react-dom';
import './css/view.css'
import './css/index.css';
import './css/calculator.css';
import  Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
