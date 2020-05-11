import React, { Component } from 'react';
import './lb.css'
import 'leaflet/dist/leaflet.css'
import {Card, CardDeck, Button} from 'react-bootstrap';
import { Chart } from "react-google-charts";
import { Multiselect } from "multiselect-react-dropdown";
import DNavbar from './DNavbar'
import pat_activity from './pat_activity'
import Labrecord from './Labrecord'
import Login from './Login'
import doc_login from './doc_login'
import { BrowserRouter, Route } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
import L from 'leaflet'
import heart_disease from './heart_disease'

class doc_labrecord extends Component{
  handlesymptom = (e) =>{
    e.preventDefault();
  
      window.location.href='heart_disease';
  
      
  }

  handleoutbreak = (e) =>{
    e.preventDefault();
  
      window.location.href='kidney_disease';
  
      
  }


  handlelab = (e) =>{
    e.preventDefault();
  
      window.location.href='liver_disease';
  
      
  }
  
  render(){
  return(
    <div>
      <DNavbar/>
      <CardDeck className="deck">

<Card onClick={(e) =>this.handlesymptom(e)} >
<Card.Img variant="top" src="https://images.agoramedia.com/everydayhealth/gcms/Heart-Attack-Causes-722x406.jpg" />
<Card.Body>
  <Card.Title>Heart Disease Check</Card.Title>
  <Card.Text>
    Input the possible symptoms and Check whether disease is present.
  </Card.Text>
</Card.Body>
</Card>

<Card onClick={(e) =>this.handleoutbreak(e)}>
<Card.Img variant="top" src="https://healthitanalytics.com/images/site/article_headers/_normal/2019-08-07-GettyImages-859774592.png" />
<Card.Body>
  <Card.Title>Kidney Disease Check</Card.Title>
  <Card.Text>
  Input the possible symptoms and Check whether disease is present.
  </Card.Text>
</Card.Body>
</Card>
<Card onClick={(e) =>this.handlelab(e)}>
<Card.Img variant="top" src="https://www.gethealthystayhealthy.com/sites/default/files/styles/article_image_default/public/2019-04/nash.jpg?itok=zhAtpkhT" />
<Card.Body>
  <Card.Title>Liver Disease Check</Card.Title>
  <Card.Text>
  Input the possible symptoms and Check whether disease is present.
  </Card.Text>
</Card.Body>
</Card>

</CardDeck> 
        </div>
    )
}
}
export default doc_labrecord;
