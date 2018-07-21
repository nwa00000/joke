import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/rem.js'
import Details from './components/router';
import registerServiceWorker from './other/registerServiceWorker';

ReactDOM.render(<Details />, document.getElementById('root'));
registerServiceWorker();
