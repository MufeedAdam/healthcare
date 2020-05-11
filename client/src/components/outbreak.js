import pat_activity from './pat_activity'
import Labrecord from './Labrecord'
import Login from './Login'
import doc_login from './doc_login'
import {Card, CardDeck, Button} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
import L from 'leaflet'
import './out.css'
import Navbar from './Navbar'
import React, { Component } from 'react';

class outbreak extends Component{
    goback = (e) =>{
        e.preventDefault();
      
          window.location.href='Labrecord';
      
          
      }
render(){
    return(
    
<div>
<Navbar/>
<Card className="out">
    <Card.Header>Disease found near your region</Card.Header>
    <Card.Body> 
        <b>Corona Virus</b><br/>
        Stay Home!Stay Safe
    </Card.Body>
    </Card>
    <Button className="go-back" onClick={(e) =>this.goback(e)}>Go Back</Button>
    </div>
    )
}
}

export default outbreak;