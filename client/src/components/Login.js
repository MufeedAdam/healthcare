import React, { Component } from 'react';
import './main.css';
import {Button, Card} from 'react-bootstrap';
import {Route,BrowserRouter,Switch} from 'react-router-dom';

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
            <div className="main_login">
                <h1 align="center">Who are You?</h1>
            <Card className="main-card">
            <Button variant="outline-primary" className="front-page" onClick={(e) =>this.handleSubmit_doc(e)}>Doctor</Button>
            <br></br>
            <br></br>
            
            <Button variant="outline-primary" className="front-page" onClick={(e) =>this.handleSubmit_pat(e)}>Patient</Button>
            </Card>
            </div>
        );
    }


}

export default Login;