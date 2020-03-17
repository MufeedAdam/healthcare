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
    
    handleSubmit_doc = (e) =>{
        e.preventDefault();
      
          window.location.href='home';
      
          
      }
render(){
    return(
        <div>
            <Navbar/>
            
            <Button className="default" onClick={console.log("function to grant access")}>Grant Access</Button>
            <br></br>
            <br></br>
            <Button className="remove" onclick={console.log("function to remove access")}>Cancel Access</Button>
            
        </div>
    )
}
}
export default pat_access;