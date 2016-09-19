import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes';
// import Marked from './Marked';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/github.css';
import './main.css';

ReactDOM.render(<Routers />, document.getElementById('app'));
// ReactDOM.render(<Marked />, document.getElementById('app'));
