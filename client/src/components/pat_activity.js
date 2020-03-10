import React, { Component } from 'react';
import Labrecord from './Labrecord'
import Login from './Login'
import "./main.css";
import {Card ,Table, DropdownButton,Dropdown,Modal, CardDeck,Form,Button} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import RecordContract from "../contracts/Record.json";
import getWeb3 from "../getWeb3";


import axios from 'axios'
class pat_activity extends Component{
   

  state = {  web3: null, accounts: null, contract: null, username: null, password: null, address: null};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RecordContract.networks[networkId];
      const instance = new web3.eth.Contract(
        RecordContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
      console.log(this.state)
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }

    
  };  

  runExample = async () => {
    const { accounts, contract } = this.state;

   

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.getNum(accounts[0]).call();
    console.log(response)
    // Update state with the result.
    //this.setState({ storageValue: response });
  };

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
