import './doc_login.css'
import React, {Component} from 'react';
import getWeb3 from "../getWeb3";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import RecordContract from "../contracts/Record.json";


class doc_login extends Component {
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


  constructor(props){
    super(props)
    this.state = {
      currentView: "signUp"
    }
  }

  handleSubmit_doc = async (e) =>{
    e.preventDefault();
    
    console.log(this.state)
    const body={
      username:this.state.username,
      address:this.state.address,
      password:this.state.password
    }
    await this.state.contract.methods.addDoctor(body.username,body.password,body.address,'True').send({ from: this.state.accounts[0] })
    // Get the value from the contract to prove it worked.
   const response = await this.state.contract.methods.getDoctorName(body.address).call();
    console.log(response)
    // Update state with the result.
    //this.setState({ storageValue: response });

  //console.log(this.state);
    //  window.location.href='doc_home';
  
      
  }

  handleSubmit_doc_signin = async (e) =>{
    e.preventDefault();
      const body={
      username:this.state.username,
      address:this.state.address,
      password:this.state.password
    }
   // await this.state.contract.methods.addDoctor(body.username,body.password,body.address,'True').send({ from: this.state.accounts[0] })
    const name = await this.state.contract.methods.getDoctorName(body.address).call();
    const password = await this.state.contract.methods.getDoctorPassword(body.address).call();
    console.log(name)
    console.log(password)
    if(name==body.username && password==body.password)
    {
      console.log("Correct")
      alert("Successful")
      window.location.href="doc_home"
    }
    else
    {
      console.log("Fail")
    }
  }



  handleaddress = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
    console.log(this.state)
   } 

 handlepassword = (e) =>{
  this.setState({
    [e.target.id]:e.target.value
  })
 } 

 handleusername = (e) =>{
  this.setState({
    [e.target.id]:e.target.value
  })
 } 


  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
            <div id="app">
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" onChange={(e) => this.handleusername(e)} required/>
                </li>
                <li>
                  <label htmlFor="address">Address:</label>
                  <input type="text" id="address" onChange={(e)=>this.handleaddress(e)} required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required  onChange={(e) =>this.handlepassword(e)}/>
                </li>
              </ul>
            </fieldset>
            <button onClick={(e) => this.handleSubmit_doc(e)}>Submit</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
          </div>
        )
        break
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" onChange={(e) => this.handleusername(e)} required/>
                </li>
                                <li>
                  <label htmlFor="address">Address:</label>
                  <input type="text" id="address" onChange={(e)=>this.handleaddress(e)} required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" onChange={(e) =>this.handlepassword(e)} required/>
                </li>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button onClick={(e) =>this.handleSubmit_doc_signin(e)}>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
        break
      case "PWReset":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
  }


  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

export default doc_login;