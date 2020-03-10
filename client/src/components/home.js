import React, { Component } from 'react';
import './homy.css'

import {Card ,DropdownButton,Dropdown,Modal, CardDeck } from 'react-bootstrap';
import { Chart } from "react-google-charts";
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import pat_activity from './pat_activity'
import Labrecord from './Labrecord'
import Login from './Login'
import doc_login from './doc_login'
import { BrowserRouter, Route } from 'react-router-dom'
 
class Home extends Component{
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
      <Route path='/pat_activity' component={pat_activity} />
      <Route path='/Labrecord' component={Labrecord} />
      
      </BrowserRouter>
        <div className="entire-page">
           
            <Card className="card-style">
            <Card.Header>Regional Outbreak Warning</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
            <p className="text">
            {' '}
            Use insect repellent, wear long-sleeved shirts and long pants, and control mosquitoes inside and outside your home.

Each year, an estimated 400 million people are infected with dengue virus. About 100 million get sick. Outbreaks have occurred in Southeast Asia, the Western Pacific, the Eastern Mediterranean, the Americas, the Caribbean, and Africa.{' '}
            </p>
            <footer className="blockquote-footer">
            Red alert in Mumbai
            </footer>
            </blockquote>
            </Card.Body>
            </Card>
            <CardDeck>
<Card >
<Card.Header>Activity Graph</Card.Header>   
   <div className="chart-design">
  <Chart 
  width={'600px'}
  height={'400px'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Day',
      'Common Cold',
      'Fever',
      'Anemia',
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ]}
  options={{
    chart: {
      title: 'Money Spent on healthcare',
      subtitle: 'in millions of dollars (USD)',
    },
  }}
  rootProps={{ 'data-testid': '3' }}
  
/>
</div>
</Card>
<Card>
<Card.Header>Disease Prediction</Card.Header>   
 <br/>
 <Multiselect options={plainArray} isObject={false} />
<br/>
<Card.Header>Possible disease</Card.Header>   
{/*<Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Disease Name</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>A brief description about the disease</p>
  </Modal.Body>
</Modal.Dialog>*/}
<h1 className="predicted">FEVER</h1>

</Card>

</CardDeck>
<br></br>
<br></br>
        </div>
        </div>
    )
}
}
export default Home;
