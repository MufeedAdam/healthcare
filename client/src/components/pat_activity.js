import React, { Component } from 'react';
import Labrecord from './Labrecord'
import Login from './Login'
import "./main.css";
import {Card ,Table, DropdownButton,Dropdown,Modal, CardDeck,Form,Button} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import { MultiSelect } from '@progress/kendo-react-dropdowns';


import axios from 'axios'
class pat_activity extends Component{
   
    constructor(props) {
        super(props);
    
        this.state = {
          symptoms: [],
          probability:'',
          prediction:''
         
        };
      }
    componentDidMount(){
            

        axios.get('http://www.arpithskumar.tech/apis/realtime/')
        .then(response => {
            this.setState({
              symptoms: response.data.symptoms
            });
            console.log(this.state)
          })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        
        
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var str=this.state.symptom
        var arr=str.join()
        console.log(arr)
        axios.post('http://www.arpithskumar.tech/apis/realtime/',[arr])
        .then(response => {
          
            console.log(response)
            this.setState({
                    prediction:response.data.prediction,
                    probability:response.data.probability
            })
          })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
       
    }


    handlesymptoms = (e) =>{
       
        this.setState({
          symptom: [e.target.value ]
      });
    
    }

    render(){
        const post = this.state.probability ? (
            <div >Probabilty : {
                this.state.probability
            }   <br></br>Prediction : {this.state.prediction} </div>
          ) : (
            <div>Loading Please wait....</div>
          );
        
        return(
            <div>
            <Navbar/>
            <div className="acti">
            <div className="container" >
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Doctor Name</th>
      <th>Symptoms</th>
      <th>Disease</th>
      <th>Medicine</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
  </tbody>
</Table>
                


                <div >
                </div>
            </div>  
            </div> 
            </div>
        )
        
       
       
    }
}


export default pat_activity;
