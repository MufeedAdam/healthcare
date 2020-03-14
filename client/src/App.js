import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import {Button, Card} from 'react-bootstrap';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Login from './components/Login'
import doc_login from './components/doc_login'
import patient_login from './components/patient_login'
import "./App.css";
import doc_home from './components/doc_home'
import doc_activity from './components/doc_activity'
import doc_labrecord from './components/doc_labrecord'
import home from './components/home'
import Labrecord from './components/Labrecord'
import pat_activity from "./components/pat_activity.js";
class App extends Component {


  render() {
    return (
      <div>
      <BrowserRouter>
      <Switch>
      <Route path="/home" component={home} /> 
       <Route path="/doc_home" component={doc_home} /> 
       <Route path="/doc_activity" component={doc_activity} /> 
       <Route path="/doc_labrecord" component={doc_labrecord} /> 
      <Route path='/Labrecord' component={Labrecord} />
      <Route path='/pat_activity' component={pat_activity}/>
      <Route path='/doc_login' component={doc_login} /> 
       <Route path='/patient_login' component={patient_login} />
         
      <Route path="/" component={Login} />
       
      </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
