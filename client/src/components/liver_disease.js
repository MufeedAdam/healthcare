import React, { Component } from 'react';
import Labrecord from './Labrecord'
import Login from './Login'
import {Card ,Button} from 'react-bootstrap';
import {Input,Label} from 'reactstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Axios from 'axios'
import DNavbar from './DNavbar'
class liver_disease extends Component{
    constructor(props) {
        super(props);
        this.state = {
          age:Number,
          gender:Number,
          tb:Number,
          db:Number,
          ap:Number,
          aa:Number,
          asa:Number,
          tp:Number,
          alb:Number,
          ag:Number,
          answer:[]
        };
      }
      handleChange =(e) =>{
        console.log(e.target.value)
        this.setState({
          [e.target.id]:e.target.value
        })
        
      }

      goback = (e) =>{
        e.preventDefault();
      
          window.location.href='doc_labrecord';
      
          
      }


      onsubmit(e){
        const body={
            age:this.state.age,
            gender:this.state.gender,
            tb:this.state.tb,
            db:this.state.db,
            ap:this.state.ap,
            aa:this.state.aa,
            asa:this.state.asa,
            tp:this.state.tp,
            alb:this.state.alb,
            ag:this.state.ag
        }
        Axios.post('https://cbmh-ml.herokuapp.com/apis/liverdisease/', body).then(res=>{
          this.setState({
            answer:res.data
          })
            console.log(res);
            console.log(res.data)
          })
          
        console.log(this.state)
      }



render(){    
    return(
      <div> 
      <div> 
          <DNavbar/>
          <div className="heart">
          <Card>
            <Card.Header><b>Liver disease Check</b></Card.Header>
            <Card.Body>
           
  <div class="form-group row">
  <h6 class="col-sm-2 col-form-label">Patient's Age :</h6>
  <div class="col-sm-10">
  <input type="text" id="age"  onChange={(e)=>this.handleChange(e)}/>
  </div>
  <div class="col-sm-10">
  <h6>Patient's sex:</h6>
  <label><input type="radio" name="gender" id="gender" value="1" onChange={(e)=>this.handleChange(e)}/>Male</label><br/>
  <label><input  type="radio" name="gender" id="gender"  value="0" onChange={(e)=>this.handleChange(e)}/>female</label>
  </div>
  </div>

  <div class="form-group row">
  <h6 class="col-sm-2 col-form-label">Total Bilirubin:</h6>
  <div class="col-sm-10">
  <input type="Number" id="tb" onChange={(e)=>this.handleChange(e)}/>
  </div>
  </div>

  <div class="form-group row">
  <h6 class="col-sm-2 col-form-label">Direct Bilirubin:</h6>
  <div class="col-sm-10">
  <input type="text" id="db"  onChange={(e)=>this.handleChange(e)}/>
  </div>
  </div>     

  <div class="form-group row">
  <h6 class="col-sm-2 col-form-label">Alkaline Phosphotase:</h6>
  <div class="col-sm-10">
  <input type="text" id="ap"  onChange={(e)=>this.handleChange(e)}/>
  </div>
  </div>    
           
  <div class="form-group row">
  <h6 class="col-sm-2 col-form-label">Alamine Aminotransferace:</h6>
  <div class="col-sm-10">
  <input type="text" id="aa"  onChange={(e)=>this.handleChange(e)}/>
  </div>
  </div>          
           
  <div class="form-group row">
  <h6 class="col-sm-2 col-form-label">Aspartate Aminotransferace:</h6>
  <div class="col-sm-10">
  <input type="text" id="asa" onChange={(e)=>this.handleChange(e)}/>
  </div>
  </div>          
            
  <div class="form-group row">
  <h6 class="col-sm-2 col-form-label">Total Proteins:</h6>
  <div class="col-sm-10">
  <input type="number" id="tp"  min="0" max="2" onChange={(e)=>this.handleChange(e)}/>
  </div>
  </div>          
           
  <div class="form-group row">
  <h6 class="col-sm-2 col-form-label">Albumin:</h6>
  <div class="col-sm-10">
  <input type="number" id="alb"  min="0" max="2" onChange={(e)=>this.handleChange(e)}/>
  </div>
  </div>          
           
  <div class="form-group row">
  <h6 class="col-sm-2 col-form-label">Albumin and Globulin Ratio:</h6>
  <div class="col-sm-10">
  <input type="text" id="ag" onChange={(e)=>this.handleChange(e)}/>
  </div>
  </div>          
  
   
            <Button className="predict-bttn" onClick={(e)=>this.onsubmit(e)}>Check it</Button>
            <Button className="predict-bttn" onClick={(e) =>this.goback(e)}>Go Back</Button>
            </Card.Body>
          </Card>

<Card>
<Card.Header>Prediction and probablity</Card.Header>
<Card.Body>

  { <div>    
    <h6>It is...{this.state.answer.prediction}</h6>
    <h6>The Probability is...{this.state.answer.probability}</h6>
    </div>}
</Card.Body>
</Card>

 
          </div>
          </div>
      </div>
    )
}
    }
export default liver_disease;
