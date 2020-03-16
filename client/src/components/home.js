import React, { Component } from 'react';
import './homy.css'
import 'leaflet/dist/leaflet.css'
import {Card, CardDeck} from 'react-bootstrap';
import { Chart } from "react-google-charts";
import { Multiselect } from "multiselect-react-dropdown";
import Navbar from './Navbar'
import pat_activity from './pat_activity'
import Labrecord from './Labrecord'
import Login from './Login'
import doc_login from './doc_login'
import { BrowserRouter, Route } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
import L from 'leaflet'

var myIcon = L.icon({
  iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
  shadowUrl: 'my-icon-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

 
class Home extends Component{
  
 constructor(props) {
    super(props);
   
    this.state = {
      location:{lat: 51.505,
        lng: -0.09,
        },
        //zoom: 1,
        haveUsersLocation:false,
        radius: '',
        message:'',
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
  };
  handleradius =(e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  };
  
  handleClick = (e) =>{
  console.log(e)
  this.setState({
      location:e.latlng
  
  })
  };
  
  
  onsubmit(e){
    e.preventDefault();
    //console.log(this.state.radius);
    console.log(this.state.location);
    const body=[this.state.location.lat,this.state.location.lng]
    console.log(body)
    axios.post('http://127.0.0.1:8000/apis/outbreak/',body)
    .then(response => {
      
        console.log(response)
        this.setState({
                outbreak:response.data.outbreak
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
    componentDidMount(){
      navigator.geolocation.getCurrentPosition((position) => {
       this.setState({
         location:{
           lat: position.coords.latitude,
           lng: position.coords.longitude
           
         },
         haveUsersLocation:true,
         zoom:13
       });
      },()=>{
        console.log("they didn't allow to have their location");
        fetch('https://ipapi.co/json')
        .then(res =>res.json())
        .then(location=> {
          console.log(location);
          this.setState({
            location:{
              lat: location.latitude,
              lng: location.longitude
              
            },
            
            haveUsersLocation:true,
            zoom:13
          });
        });
      });
    }
    
  
  
  
  render(){
    
    const position = [this.state.location.lat, this.state.location.lng];
    const { plainArray, objectArray, selectedValues } = this.state;
    const post = this.state.outbreak ? (
      <div >
         <br></br>Prediction : {this.state.outbreak} </div>
    ) : (
      <div>Loading Please wait....</div>
    );
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Route path='/pat_activity' component={pat_activity} />
      <Route path='/Labrecord' component={Labrecord} />
      
      </BrowserRouter>  
        <div className="entire-page">
        <CardDeck>   
            <Card >
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
</CardDeck>
<br/>
<Card>
<Card.Header>Possible Symptoms</Card.Header>   
 <br/>
 <Multiselect options={plainArray} isObject={false} />
<br/>
{/*<Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Disease Name</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>A brief description about the disease</p>
  </Modal.Body>
</Modal.Dialog>*/}
<h6 align="center">Predicted Possible disease:</h6>
<h1 className="predicted">FEVER</h1>

</Card>
</CardDeck>
<br></br>
<br></br>
<Card >
<Card.Header>Tasks for You!</Card.Header>
</Card>
        </div>
        </div>
    )
}
}
export default Home;
