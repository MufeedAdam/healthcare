import React, { Component } from 'react';
import './doc_homy.css'
import { MDBInput } from "mdbreact";
import {Card ,Form,DropdownButton,Dropdown,Modal, CardDeck,Button} from 'react-bootstrap';
import { Chart } from "react-google-charts";
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import Activity from './Activity'
import Labrecord from './Labrecord'
import Login from './Login'
import { BrowserRouter, Route } from 'react-router-dom'
import { MultiSelect } from '@progress/kendo-react-dropdowns';
const symptoms = [ "Vommiting", "Headache", "Fever", "Common cold", "Tonsils", "Cough"];

class doc_home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      patname:'',
      add_date:'',
      disease:[],
      symptoms:[],
      medicines:[],
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


patname = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
    console.log(this.state)
   } 

add_date = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
    console.log(this.state)
   } 

disease = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
    console.log(this.state)
   } 

medicines = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
    console.log(this.state)
   } 

handlesymptoms = (e) =>{
  this.setState({
    symptoms: [e.target.value ]
});
console.log(e.target.value)
}


handleSubmit_doc_home = async (e) =>{
    e.preventDefault();
      
   const disease=this.state.disease;
   const diseases=disease.split(",");
   console.log(diseases) 
    
   const medicines=this.state.medicines;
   const medicine=medicines.split(",");
   console.log(medicine) 
   
   
   
   const body={
      patname:this.state.patname,
      add_date:this.state.add_date,
      disease:diseases,
      medicines:medicine ,
      symptoms:this.state.symptoms
    }
    console.log(this.state.patname);
    console.log(this.state.add_date);
    console.log(this.state.disease);
    console.log(this.state.medicines);
    console.log(this.state.symptoms)
    console.log(body)

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
           <Form>
  <Form.Group>
    <Form.Label>Patient Name</Form.Label>
    <Form.Control type="text" id="patname" name="patname" placeholder="Enter Patient's Name" onChange={(e) => this.patname(e)} required/>
    
  </Form.Group>

  <Form.Group>
    <Form.Label>Admission Date</Form.Label>
    <Form.Control type="date" id="add_date" name="add_date" placeholder="Enter the date" onChange={(e) => this.add_date(e)}/>
  </Form.Group>
  <Form.Group>
    
{/* <Multiselect options={plainArray} isObject={false} />   */}
<div className="example-wrapper">
                <div>
                    <div>Possible symptoms:</div>
                    <MultiSelect
                        data={symptoms}
                        onChange={this.handlesymptoms}
                        value={this.state.value}
                    />
                </div>
            </div></Form.Group>
  <br/>
    <Form.Group>
    <Form.Label>Diaognized Diseases(Seperated by comma)</Form.Label>
    <Form.Control type="text" placeholder="Enter Diseases Names seperated by comma" id="disease" name="disease" onChange={(e) => this.disease(e)}/>
    
  </Form.Group>

  <br/>
    <Form.Group>
    <Form.Label>Please enter the prescribed medicines(Seperated by comma)</Form.Label>
    <Form.Control type="text" placeholder="Enter medicines seperated by comma" id="medicines" name="medicines" onChange={(e) => this.medicines(e)}/>
    
  </Form.Group>

  
  <br/>
  <Button variant="primary" type="submit" onClick={(e) =>this.handleSubmit_doc_home(e)}>
    Submit
  </Button>
 
</Form>
</div>
</div>
    )
}
}
export default doc_home;
