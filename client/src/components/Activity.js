import React, { Component } from 'react';
import Labrecord from './Labrecord'
import Login from './Login'
import {Card ,Table, DropdownButton,Dropdown,Modal, CardDeck } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
const Activity = () => {
    
    return(
        <div> 
        <div> <Navbar/>
            <div className="entire-page">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Admission date</th>
                            <th>Symptoms detected</th>
                            <th>Disease Predicted</th>
                            <th>Medicines prescribed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>161727373</td>
                            <td>Common Cold,Bodyache,Fever</td>
                            <td>Malaria</td>
                            <td>Paracetemol,Antibiotic</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>143727373</td>
                            <td>Weakness</td>
                            <td>Anemia</td>
                            <td>Iron tablets</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>134727373</td>
                            <td>sleeping</td>
                            <td>Sleeping sickness</td>
                            <td>Coffee</td>
                        </tr>
                    </tbody>

                </Table>
             <CardDeck>  
            <Card className="card-style1">
            <Card.Header>X-ray 1</Card.Header>
            <Card.Body>
            <Card.Img className="img-design" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI5ZgERo_1MMlvMjD4omkane5jEmxOfD_LWujlcgq2b0Opx-td" />
            </Card.Body>
            </Card>
            <Card className="card-style1">
            <Card.Header>X-ray 2</Card.Header>
            <Card.Body>
            <Card.Img className="img-design" variant="top" src="data:image/jpeg;base64,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" />
            </Card.Body>
            </Card>
            </CardDeck>
            <br/>
            <CardDeck>  
            <Card className="card-style1">
            <Card.Header>Lab Report 1</Card.Header>
            <Card.Body>
            <Card.Img className="img-design" variant="top" src="https://workbench-media-workbench-prod.s3.amazonaws.com/cwist/cwists/4e/6a/d6f2b906-4e6a-4660-8e08-0a62587d1eef_500_500.png" />
            </Card.Body>
            </Card>
            <Card className="card-style1">
            <Card.Header>Lab Report 2</Card.Header>
            <Card.Body>
            <Card.Img className="img-design" variant="top" src="https://i.babygogo.in/d19db271-d91f-484b-a427-b648c5ad23b3.jpg" />
            </Card.Body>
            </Card>
            </CardDeck>
            
            </div>
            </div>
        </div>
    )
}

export default Activity;
