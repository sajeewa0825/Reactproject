import React, { Component } from 'react';
import './Singupstyle.css';

class Singup extends Component {

  constructor(props) {
    super(props);
    this.state={
      email:'',
      password: ''
    }
  }

  changehedel2=(b) =>{
    const {name,value} = b.target;

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

    <div className="singupparent">

          <div className="singupname">
            <h1 className="title">SIGNUP </h1>
          </div>

          <div className="singupform">
          <form className="row g-3">

               <div className="col-md-6">
                <label htmlFor="inputEmail4" >Email</label>
                <input type="email" onChange={this.changehedel2} className="form-control" id="inputEmail4" value={this.state.email} />
              </div>
          
              <div className="col-md-6">
              <label htmlFor="Firstname" >Frist Name</label>
                <input type="text" className="form-control"  aria-label="First name" />
              </div>

              <div className="col-md-6">
                <label htmlFor="Lastname" >Last Name</label>
                <input type="text" className="form-control" aria-label="Last name" />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputPassword4" >Password</label>
                <input type="password" onChange={this.changehedel2} className="form-control" id="inputPassword4" value={this.state.password}/>
              </div>

              <div className="col-md-6">
                <label htmlFor="inputAddress" >Address</label>
                <input type="text" className="form-control" id="inputAddress" />
              </div>
            
              <div className="col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
            
              
            
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </form> 
            
          </div>





    </div>
        
            </div>
        );
    }
}

export default Singup;