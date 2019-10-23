import React from 'react';
import ReactDOM from 'react-dom';

import "./public/css/site.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./public/css/font-awesome.min.css"
import "./public/css/AdminLTE.css"
import "./public/css/_all-skins.min.css"
import "./public/css/blue-style.css"
import "./public/css/custom.css"
import "./public/css/select2.min.css"
import "./public/css/bootstrap-switch.css"
import "./public/css/datepicker3.css"
import "./public/css/bootstrap-timepicker.min.css"
import "./public/css/bootstrap-datetimepicker.min.css"




import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
