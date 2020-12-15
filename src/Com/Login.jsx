import React, { Component } from 'react';
import './Loginstyle.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state={
      email:'',
      password: ''
    }
  }

      changehedel=(e) =>{

        const {name,value} = e.target;

          this.setState({
            [name]: value
          })
      }
      submithedel=() =>{
        alert(JSON.stringify(this.state));
      }


  render() {
    return (
      <div>
        <div className="login-parent">
           <div className="loginname">
             <h1 className="title">LOGIN</h1>
           </div>
           <div className="loginform">

              <form onSubmit={this.submithedel}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input Name="email" onChange={this.changehedel} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} />
                  
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input Name="password" onChange={this.changehedel} type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} />
                </div>
                
                <button type="submit" className="btnsubmit">Submit</button>
              </form>

           </div>
        </div>
      </div>
    );
  }
}

export default Login;

