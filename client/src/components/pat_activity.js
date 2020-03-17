import React, { Component } from 'react';
import Labrecord from './Labrecord'
import Login from './Login'
import "./pa.css";
import ipfs from '../ipfs'
import {Card ,Table, DropdownButton,Dropdown,Modal, CardDeck,Form,Button} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import RecordContract from "../contracts/Record.json";
import getWeb3 from "../getWeb3";
import ReactTable from 'react-table-6'

import axios from 'axios'
class pat_activity extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Card className="form1">
          <Card.Header>Please fill up your details</Card.Header>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
      
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone no.</Form.Label>
    <Form.Control type="tel" placeholder="Contact no." />
  </Form.Group>
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
      
  </Form.Group>
 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Please select an image for your profile pic.</Form.Label>
 <br></br>
  <input type="file" name="file" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card>
    </div>
    
    )
  }
  
}


export default pat_activity;
