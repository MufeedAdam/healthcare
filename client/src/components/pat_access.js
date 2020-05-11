import React, { Component } from 'react';
import Labrecord from './Labrecord'
import Login from './Login'
import "./pat.css";
import ipfs from '../ipfs'
import {Card ,Table, DropdownButton,Dropdown,Modal, CardDeck,Form,Button} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import RecordContract from "../contracts/Record.json";
import getWeb3 from "../getWeb3";
import ReactTable from 'react-table-6'

class pat_access extends Component{
    
    
      grant(){
        alert("Access granted to requested doctor");
      }
      remove_access(){
        alert("Doctor won't be able to access your data anymore!")
      }
          
     
render(){
    return(
        <div>
            <Navbar/>
            
            <button className="default" onClick={this.grant}>Grant Access</button>
            <br></br>
            <br></br>
            <button className="remove" onClick={this.remove_access}>Cancel Access</button>
            
        </div>
    )
}
}
export default pat_access;