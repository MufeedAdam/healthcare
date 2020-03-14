import React, { Component } from 'react';
import Labrecord from './Labrecord'
import Login from './Login'
import {Card ,Table, DropdownButton,Dropdown,Modal, CardDeck } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import DNavbar from './DNavbar'
const doc_labrecord = () => {
    
    return(
        <div> 
        <div> 
            <DNavbar/>
            <div className="entire-page">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Symptoms</th>
      <th>Predicted Disease</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      
    </tr>
  
  </tbody>
</Table>
   
            </div>
            </div>
        </div>
    )
}

export default doc_labrecord;
