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
            <Card>
              <Card.Header>Upload the file in <b>.csv</b> format</Card.Header>
              <Card.Body>
              <input type="file" name="file" />
              </Card.Body>
            </Card>
   
            </div>
            </div>
        </div>
    )
}

export default doc_labrecord;
