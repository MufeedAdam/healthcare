import React, { Component } from 'react';
import './doc_homy.css'
import { MDBInput } from "mdbreact";
import {Card ,DropdownButton,Dropdown,Modal, CardDeck,Button } from 'react-bootstrap';
import { Chart } from "react-google-charts";
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import Activity from './Activity'
import Labrecord from './Labrecord'
import Login from './Login'
import { BrowserRouter, Route } from 'react-router-dom'
 
class doc_home extends Component{
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render(){
    const { plainArray, objectArray, selectedValues } = this.state;

  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Route path='/Activity' component={Activity} />
      <Route path='/Labrecord' component={Labrecord} />
      
      </BrowserRouter>
        <div className="entire-page">
            <Card>
            <Card.Header className="card-header1">Symptoms found</Card.Header>   
            <br/>
            <Multiselect options={plainArray} isObject={false} />
            </Card>
            <Card>
            <div class="form-group">
            <Card.Header className="card-header1">Please enter the prescribed medicines here!</Card.Header>
           <textarea class="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>
            </div>

            </Card>


<Card>
<Card.Header className="card-header1">Please select the suggestions for faster recovery!</Card.Header>
<div className="drop">
<DropdownButton id="dropdown-item-button2" title="Select your suggestions">
  <Dropdown.Item as="button">Sleep</Dropdown.Item>
  <Dropdown.Item as="button">Walk</Dropdown.Item>
  <Dropdown.Item as="button">Strict Healthy Diet</Dropdown.Item>
</DropdownButton>
</div>
</Card>
<Button variant="success" className="sub-bttn">Submit</Button>
        </div>
        </div>
    )
}
}
export default doc_home;
