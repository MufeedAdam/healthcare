import React, { Component } from 'react';
import Labrecord from './Labrecord'
import Login from './Login'
import "./dc.css";
import ipfs from '../ipfs'
import {Card ,Table, DropdownButton,Dropdown,Modal, CardDeck,Form,Button} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import RecordContract from "../contracts/Record.json";
import getWeb3 from "../getWeb3";
import ReactTable from 'react-table-6'

class doc_entry extends Component{
    
    handleSubmit_doc = (e) =>{
        e.preventDefault();
      
          window.location.href='doc_home';
      
          
      }
render(){
    return(
        <div>
             <Card className="give" onClick={(e) =>this.handleSubmit_doc(e)}>
    <Card.Img variant="top" src="https://miro.medium.com/max/626/0*dA9Mwl-a-0qYyg88.jpg" />
    <Card.Body>
      <Card.Title>Request for access</Card.Title>
      <Card.Text>
        Click on the card to request the acess to the patient!
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
    )
}
}
export default doc_entry;