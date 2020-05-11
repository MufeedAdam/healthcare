import React, { Component } from 'react';
import {Card ,Button, CardDeck} from 'react-bootstrap';
import Axios from 'axios'
import DNavbar from './DNavbar'
import './common_disease.css'
class heart_disease extends Component{
    constructor(props) {
        super(props);
        this.state = {
          age:Number,
          sex:Number,
          cp:Number,
          trestbps:Number,
          chol:Number,
          fbs:Number,
          restecg:Number,
          thalach:Number,
          exang:Number,
          oldpeak:Number,
          slope:Number,
          ca:Number,
          thal:Number,
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
            sex:this.state.sex,
            cp:this.state.cp,
            trestbps:this.state.trestbps,
            chol:this.state.chol,
            fbs:this.state.fbs,
            restecg:this.state.restecg,
            thalach:this.state.thalach,
            exang:this.state.exang,
            oldpeak:this.state.oldpeak,
            slope:this.state.slope,
            ca:this.state.ca,
            thal:this.state.thal
        }
        Axios.post('https://cbmh-ml.herokuapp.com/apis/heartdisease/', body).then(res=>{
            this.setState({
                answer:res.data
              })
              
        console.log(res);
            console.log(res.data)
            console.log(this.state.answer)
          })
      }



render(){    
    return(
        <div> 
        <div> 
            <DNavbar/>
            <div className="heart">
            <Card>
              <Card.Header><b>Heart disease Check</b></Card.Header>
              <Card.Body>
             
    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Patient's Age :</h6>
    <div class="col-sm-10">
    <input type="text" id="age"  onChange={(e)=>this.handleChange(e)}/>
    </div>
    <div class="col-sm-10">
    <h6>Patient's sex:</h6>
    <label><input type="radio" name="sex" id="sex" value="1" onChange={(e)=>this.handleChange(e)}/>Male</label><br/>
    <label><input  type="radio" name="sex" id="sex"  value="0" onChange={(e)=>this.handleChange(e)}/>female</label>
    </div>
    </div>

    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">chest pain type:</h6>
    <div class="col-sm-10">
    <input type="number" id="cp"  min="1" max="4" onChange={(e)=>this.handleChange(e)}/>
    </div>
    </div>

    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Resting blood pressure:</h6>
    <div class="col-sm-10">
    <input type="text" id="trestbps"  onChange={(e)=>this.handleChange(e)}/>
    </div>
    </div>     

    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Serum cholestrol:</h6>
    <div class="col-sm-10">
    <input type="text" id="chol"  onChange={(e)=>this.handleChange(e)}/>
    </div>
    </div>    
             
    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Is Fasting blood sugar level>120:</h6>
    <div class="col-sm-10">
    <label><input type="radio" name="fbs" id="fbs" value="1" onChange={(e)=>this.handleChange(e)}/>Yes</label><br/><br/>
    <label><input type="radio" name="fbs" id="fbs"  value="0" onChange={(e)=>this.handleChange(e)}/>No</label>
    </div>
    </div>          
             
    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Resting electrocardiographic results:</h6>
    <div class="col-sm-10">
    <input type="text" id="restecg" onChange={(e)=>this.handleChange(e)}/>
    </div>
    </div>          
              
    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Maximum heart rate achieved:</h6>
    <div class="col-sm-10">
    <input type="number" id="thalach"  min="0" max="2" onChange={(e)=>this.handleChange(e)}/>
    </div>
    </div>          
             
    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Exercise induced angina:</h6>
    <div class="col-sm-10">
    <label><input type="radio" name="exang" id="exang" value="1" onChange={(e)=>this.handleChange(e)}/>Yes</label><br/><br/>
    <label><input type="radio" name="exang" id="exang"  value="0" onChange={(e)=>this.handleChange(e)}/>No</label>
    </div>
    </div>          
             
    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Enter oldpeak:</h6>
    <div class="col-sm-10">
    <input type="text" id="oldpeak" onChange={(e)=>this.handleChange(e)}/>
    </div>
    </div>          
    
    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Enter slope:</h6>
    <div class="col-sm-10">
    <input type="text" id="slope" onChange={(e)=>this.handleChange(e)}/>
    </div>
    </div>          
     
    <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Number of major vessels colored by flourosopy:</h6>
    <div class="col-sm-10">
    <input type="text" id="ca" onChange={(e)=>this.handleChange(e)}/>
    </div>
    </div> 

     <div class="form-group row">
    <h6 class="col-sm-2 col-form-label">Enter thal:</h6>
    <div class="col-sm-10">
    <input type="text" id="thal" onChange={(e)=>this.handleChange(e)}/>
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
export default heart_disease;
