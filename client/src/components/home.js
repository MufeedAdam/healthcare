import React, { Component } from 'react';
import Labrecord from './Labrecord'
import Login from './Login'
import './homy.css'

import {Card ,Table, DropdownButton,Dropdown,Modal, CardDeck } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
const home = () => {
    
    return(
        <div> 
        <div> <Navbar/>
            <div className="entire-page">
              <CardDeck>
              <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header>Your details</Card.Header>
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
  <Card.Header>Various Lab Reports</Card.Header>
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
        </div>
    )
}

export default home;
