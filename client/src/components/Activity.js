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
class Activity extends Component{
   
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

                <form className="center card-panel " onSubmit={this.handleSubmit}>
               
                <div className="example-wrapper">
                <div>
                    <div>Possible symptoms:</div>
                    <MultiSelect className="multi"
                        data={this.state.symptoms}
                        onChange={this.handlesymptoms}
                        value={this.state.value}
                    />
                </div>
            </div>
            <button className="waves-effect waves-light btn">Submit</button>
                </form>


                <div >
                    <p>{post}</p>
                </div>
            </div>  
            </div> 
            </div>
        )
        
       
       
    }
}


export default Activity;
