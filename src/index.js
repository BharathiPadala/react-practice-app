import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import FirstSection from './component/firstsection';
import SecondSection from './component/secondsection';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import css from './css/style.css';
import './index.css';

function Body() {
    return (
    <div className="body">
     <FirstSection/>
     <SecondSection/>
    </div>
    )
}
ReactDOM.render(
    <BrowserRouter>
    <React.Fragment>
       <Route path="/" component={LoginForm} exact/>
       <Route path="/signup" component={RegisterForm}/>
       <App/>
       <Route path="/dashboard" component={Body} exact/>
       <Route path="/dashboard/services" component={SecondSection}/>
     </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
