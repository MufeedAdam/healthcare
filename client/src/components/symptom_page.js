import React, { Component } from 'react';
import './homy.css'
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

class symptom_page extends Component{

    goback = (e) =>{
        e.preventDefault();
      
          window.location.href='Labrecord';
      
          
      }
    constructor(props) {
        super(props);
       
        this.state = {
          location:{lat: 51.505,
            lng: -0.09,
            },
            //zoom: 1,
            haveUsersLocation:false,
            radius: '',
            message:'',
          plainArray: ["headache", "vommiting", "throught pain", "bodyache", "stomach pain"],
          objectArray: [
            { key: "headache", cat: "Group 1" },
            { key: "vommiting", cat: "Group 1" },
            { key: "throught pain", cat: "Group 1" },
            { key: "bodyache", cat: "Group 2" },
            { key: "stomach pain", cat: "Group 2" },
            { key: "Option 6", cat: "Group 2" },
            { key: "Option 7", cat: "Group 2" }
          ],
          selectedValues: [
            { key: "Option 1", cat: "Group 1" },
            { key: "Option 2", cat: "Group 1" }
          ]
        };
        this.style = {
          chips: {
            background: "red"
          },
          searchBox: {
            border: "none",
            "border-bottom": "1px solid blue",
            "border-radius": "0px"
          },
          multiselectContainer: {
            color: "red"
          }
        };
        this.addItem = this.addItem.bind(this);
      }
      addItem() {
        this.selectedValues.push({ key: "Option 3", cat: "Group 1" });
      };
      render(){
    
        const position = [this.state.location.lat, this.state.location.lng];
        const { plainArray, objectArray, selectedValues } = this.state;
        const post = this.state.outbreak ? (
          <div >
             <br></br>Prediction : {this.state.outbreak} </div>
        ) : (
          <div>Loading Please wait....</div>
        );
      return(
        <div>
            <Navbar/>
            <CardDeck className="deck">
      <Card>
<Card.Header>Possible Symptoms</Card.Header>   
 <br/>
 <Multiselect options={plainArray} isObject={false} />
<br/>

<h6 align="center">Predicted Possible disease:</h6>
<h1 className="predicted">FEVER</h1>

</Card>
<Card >  
<Card.Header>Tasks for You!</Card.Header>
<Card.Body>
  <ul>
  <li>Sleep for 2hrs.</li>
  <li>Walk for half an hour.</li>
  <li>Exercise one hour per day.</li>
  <li>Run for half a kilometer.</li>
  </ul></Card.Body>
</Card>
</CardDeck>
<Button className="go-back" onClick={(e) =>this.goback(e)}>Go Back</Button>
        </div>
    )
}
}

export default symptom_page;