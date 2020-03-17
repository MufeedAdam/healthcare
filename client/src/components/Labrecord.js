import React, { Component } from 'react';
import './lb.css'
import 'leaflet/dist/leaflet.css'
import {Card, CardDeck, Button} from 'react-bootstrap';
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
import symptom_page from './symptom_page'

class Activity extends Component{
  handlesymptom = (e) =>{
    e.preventDefault();
  
      window.location.href='symptom_page';
  
      
  }

  handleoutbreak = (e) =>{
    e.preventDefault();
  
      window.location.href='outbreak';
  
      
  }


  handlelab = (e) =>{
    e.preventDefault();
  
      window.location.href='lab_analysis';
  
      
  }
  
  render(){
  return(
    <div>
      <Navbar/>
      <CardDeck className="deck">

<Card onClick={(e) =>this.handlesymptom(e)} >
<Card.Img variant="top" src="https://www.biospectrumindia.com/uploads/articles/health_insurance_jpg_2-10954.jpg" />
<Card.Body>
  <Card.Title>Check the possible disease!</Card.Title>
  <Card.Text>
    Input the possible symptoms and Check what possible disease you might have and various tasks for it.
  </Card.Text>
</Card.Body>
</Card>

<Card onClick={(e) =>this.handleoutbreak(e)}>
<Card.Img variant="top" src="https://www.cdc.gov/coronavirus/2019-ncov/images/outbreak-coronavirus-world.png" />
<Card.Body>
  <Card.Title>Regional Outbreak</Card.Title>
  <Card.Text>
    Have a look at the disease that might be in your area.
  </Card.Text>
</Card.Body>
</Card>
<Card onClick={(e) =>this.handlelab(e)}>
<Card.Img variant="top" src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/researchnotebook_1280p.jpg?itok=jNaBjBSx" />
<Card.Body>
  <Card.Title>Lab Record Analysis</Card.Title>
  <Card.Text>
    Check the report after all your record is being analysed.
  </Card.Text>
</Card.Body>
</Card>

</CardDeck> 
        </div>
    )
}
}
export default Activity;
