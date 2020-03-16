import React, { Component } from 'react';
import './main.css';
import {Button,Fab,classes} from '@material-ui/core';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Particles from 'react-particles-js';
import { Card,CardDeck } from 'react-bootstrap';
class Login extends Component {

   

handleSubmit_doc = (e) =>{
  e.preventDefault();

    window.location.href='doc_login';

    
}

handleSubmit_pat = (e) =>{
    e.preventDefault();
      window.location.href='patient_login';
  
      
  }
  


    
    render() {

        
        return (
            <div className="App">
            
          <h4 className="login-head"><b>Converging Blockchain and Machine Learning for Healthcare</b></h4>
            <CardDeck className="deck">

    <Card onClick={(e) =>this.handleSubmit_doc(e)} >
    <Card.Img variant="top" src="https://d2gr5kl7dt2z3t.cloudfront.net/blog/wp-content/uploads/2015/08/shutterstock_286368323-750x500.jpg" />
    <Card.Body>
      <Card.Title>Doctor</Card.Title>
      <Card.Text>
        Login as Doctor
      </Card.Text>
    </Card.Body>
  </Card>

  <Card onClick={(e) =>this.handleSubmit_pat(e)}>
    <Card.Img variant="top" src="https://4bmyaa9xaf0tl8hb3wxlj3nh-wpengine.netdna-ssl.com/wp-content/uploads/sites/12/2017/06/Happy-patient.png" />
    <Card.Body>
      <Card.Title>Patient</Card.Title>
      <Card.Text>
        Login as Patient
      </Card.Text>
    </Card.Body>
  </Card>

    </CardDeck> 
        </div>
            
        );
    }


}

export default Login;