import React, { Component } from 'react';
import {Card, CardDeck, Button} from 'react-bootstrap';
import './lba.css'
import { Chart } from "react-google-charts";
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import pat_activity from './pat_activity'
import Labrecord from './Labrecord'
import Login from './Login'
import doc_login from './doc_login'
import { BrowserRouter, Route } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
import L from 'leaflet'

class lab_analysis extends Component{
    goback = (e) =>{
        e.preventDefault();
      
          window.location.href='Labrecord';
      
          
      }
render(){
    return(
        <div>
            <Navbar/>
                <CardDeck className="lba">
                    <Card>
                        <Card.Header>
                            Heart Disease
                        </Card.Header>
                        <Card.Body>
                        <b>Test results:</b> Positive Or Negative
                        <br></br>
                        <b>Probablity:</b>number
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            Malaria
                        </Card.Header>
                        <Card.Body>
                        <b>Test results:</b> Positive Or Negative
                        <br></br>
                        <b>Probablity:</b>number
                        </Card.Body>
                    </Card><Card>
                        <Card.Header>
                            Kidney disease
                        </Card.Header>
                        <Card.Body>
                        <b>Test results:</b> Positive Or Negative 
                        <br></br>
                        <b>Probablity:</b>number
                        </Card.Body>
                    </Card><Card>
                        <Card.Header>
                            Fever
                        </Card.Header>
                        <Card.Body>
                        <b>Test results:</b>Positive Or Negative
                        <br></br>
                        <b>Probablity:</b>number
                        </Card.Body>
                    </Card><Card>
                        <Card.Header>
                            Viral Infection
                        </Card.Header>
                        <Card.Body>
                        <b>Test results:</b> Positive Or Negative
                        <br></br>
                        <b>Probablity:</b>number
                        </Card.Body>
                    </Card>
                
                </CardDeck>
               <br></br>
               <br></br>
               
                <Button className="go-back" onClick={(e) =>this.goback(e)}>Go Back</Button>
        </div>
    )
};
}

export default lab_analysis;