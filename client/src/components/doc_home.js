import React, { Component } from 'react';
import './doc_homy.css'
import ipfs from '../ipfs'
import { MDBInput } from "mdbreact";
import {Card ,Table, DropdownButton,Dropdown,Modal, CardDeck } from 'react-bootstrap';
import { Chart } from "react-google-charts";
import { Multiselect } from "multiselect-react-dropdown";
import DNavbar from './DNavbar'
import doc_activity from './doc_activity'
import doc_labrecord from './doc_labrecord'
import Login from './Login'
import getWeb3 from "../getWeb3";
import RecordContract from "../contracts/Record.json";
import { BrowserRouter, Route } from 'react-router-dom'
import { MultiSelect } from '@progress/kendo-react-dropdowns';
const symptoms = [ "Vommiting", "Headache", "Fever", "Common cold", "Tonsils", "Cough"];

class doc_home extends Component{


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
      this.setState({ web3, accounts, contract: instance });
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };  
  constructor(props) {
    super(props);
    this.state = {
      patname:'',
      docaddr:'',
      add_date:'',
      disease:[],
      symptoms:[],
      medicines:[],
      plainArray: ["headache", "vommiting", "throught pain", "bodyache", "stomach pain"],
      
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
   
   
docaddr = (e) =>{
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
      
   const diseases=this.state.disease;
   //const diseases=disease.split(",");
  // console.log(diseases) 
    
   const medicine=this.state.medicines;
   //const medicine=medicines.split(",");
   //console.log(medicine) 
   
   const ad_date=this.state.add_date;
   const add_date=new Date(ad_date).getTime()
   const unix_time=Math.floor(add_date/1000)
   //onsole.log(unix_time)
   const symptom=this.state.symptoms.join(",")
   const body= {
      patname:this.state.patname,
      docaddr:this.state.docaddr,
      add_date:unix_time,
      disease:diseases,
      medicines:medicine ,
      symptom:symptom
    }
    console.log(body)
    //console.log(this.state.patname);
    //console.log(this.state.docaddr)
    //console.log(this.state.add_date);
    //console.log(this.state.disease);
    //console.log(this.state.medicines);
   // console.log(this.state.symptoms)
  //  console.log(body)
    //console.log(this.state.accounts[0])

    await ipfs.files.add(Buffer.from(JSON.stringify(body)))
  .then(res => {
    const hash = res[0].hash
    console.log('added data hash:', hash)
    this.setState({
      getHash:hash
    })
    return ipfs.files.cat(hash)
  })
  .then(output => {
    console.log('data : ',output)
    console.log('retrieved data:', JSON.parse(output))
  })
  await ipfs.get(this.state.getHash)
  .then(res=>{
    console.log(JSON.parse(res[0].content))
  })

    try {
     const s= await this.state.contract.methods.addRecord(this.state.patname,this.state.getHash).send({ from: this.state.accounts[0]})
    console.log(s);
      
    } catch (error) {
      console.log("Error ::::",error)
    }

    
  
   // console.log("Done")
    
    
   // const response = await this.state.contract.methods.getRecord(body.patname,0).call();
   // console.log(response)
}

  render(){
    const { plainArray, objectArray, selectedValues } = this.state;

  return(
    <div>
    <BrowserRouter>
      <DNavbar/>
      <Route path='/doc_activity' component={doc_activity} />
      <Route path='/doc_labrecord' component={doc_labrecord} />
      
      </BrowserRouter>
      
    <div className="entire-page">
    <CardDeck>
              <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header>Patient's details</Card.Header>
    <Card.Body>
      <img className="img-class" src="https://media.istockphoto.com/vectors/user-icon-vector-with-laptop-computer-female-person-profile-avatar-vector-id903044512?k=6&m=903044512&s=612x612&w=0&h=8fr2Q_lJWyQsN7QSbUm0GKIoAL_YS9NXjnENxh4bNBM="></img>
      <Table>
        <tr>
        <td>Name:</td>
        <td>GAMA</td>
        </tr>
        <tr>
        <td>Place:</td>
        <td>Mangalore</td>
        </tr><tr>
        <td>Contact no:</td>
        <td>9475869584</td>
        </tr><tr>
        <td>email-id</td>
        <td>gama@gmail.com</td>
        </tr>
      </Table>
    </Card.Body>
  </Card>
  <br />

  <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header>Prescription of last checkup</Card.Header>
    <Card.Body>
    <Table>
        <tr>
        <td>Patient's Address:</td>
        <td>0xaBB4bb89B4F54EEC4749089753Cec16417Ac419E</td>
        </tr>
        <tr>
        <td>Doctor's Address:</td>
        <td>0xF493aA578Bc6212b4C75Ed858b7822fb5E1E925A</td>
        </tr><tr>
        <td>Admission Date:</td>
        <td>16/03/2020</td>
        </tr>
        <tr>
        <td>Possible Symptoms:</td>
        <td>Vommiting, Stomache, Headache</td>
        </tr>
        <tr>
        <td>Disease Predicted:</td>
        <td>Food Poison</td>
        </tr>
        <tr>
        <td>Possible Medicines:</td>
        <td>Aspirin,Paracetomol</td>
        </tr>
      </Table>
    </Card.Body>
  </Card>
  <br />
              </CardDeck>
{/* This is for all lab records for various disease checks */}
<Card>
  <Card.Header>Lab Reports</Card.Header>
  <Card.Body>
  <CardDeck>
  <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header>Heart disease report</Card.Header>
    <Card.Body>
    <Table>
        <tr>
        <td>age -></td>
        <td>80</td>
        </tr>
        <tr>
        <td>sex -> </td>
        <td>female</td>
        </tr><tr>
        <td>cp -> </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>trestbps -></td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>chol -> </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>fbs -></td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>restecg -></td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>thalach ->   </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td> exang ->  </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>oldpeak ->    </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>slope ->   </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>ca ->    </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>thal ->   </td>
        <td>values from record</td>
        </tr>
      </Table>
    </Card.Body>
  </Card>
  
  <br />

  <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header>Chronic kidney disease report</Card.Header>
    <Card.Body>
    <Table>
        <tr>
        <td>age -></td>
        <td>80</td>
        </tr>
        <tr>
        <td>bp -> </td>
        <td>values from record</td>
        </tr><tr>
        <td>sg -> </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>al -></td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>su -> </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>rbc -></td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>pc -></td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>pcc ->   </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td> ba ->  </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>bgr ->    </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>bu ->   </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>sc ->    </td>
        <td>values from record</td>
        </tr>
        <tr>
        <td>sod ->   </td>
        <td>values from record</td>
        </tr>
      </Table>
    </Card.Body>
  </Card>
  
  </CardDeck>
  </Card.Body>
</Card>

    </div>
      </div>
    )
}
}
export default doc_home;
