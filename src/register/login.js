import React, {Component} from "react";
import Navbar from "./navbar";

import axios from "axios";

class Login extends Component  {

  
  constructor(props) {
    super(props);
    console.log(props);
    //  this.state = {user:{email: '', password:''}}
     this.state = {
        user:{email: "", password:""}
       }
}
   
    onEmail = (e, origin) => {
       let{user}= this.state;
       switch(origin){
        case  "email":
        this.setState({user:{...user, email:e.target.value}});
        break;
        case  "password":
        this.setState({user:{...user, password:e.target.value}});
        break;

       }
    }
    handleLogin = async () => {
        let{user} = this.state;
        let  formData = new FormData();
        
        formData.append("email", user.email);
        formData.append("password", user.password);
  
         let url = "http://localhost/tracker/api/login.php";
        axios({
          method: 'post',
          url: url,
          data: formData
        })
        .then((response) => {
            // console.log(response.pwd);
            if(user.password === '1111')
            
            
            {
             //   alert('welcome ');
               
                window.location.href = '/dashboard';
              }
          console.log(response);
        });
      }

  render(){


    return(
        <div> 
            < Navbar />
            <br></br>
    <div className="container ">
        <div className="Row align-center" >
        <div className="col-lg-6 col-md-12">
        <div className="card">
            <div className="card-header">
             Login
            </div>
            <div className="card-body">
            
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" value={this.state.user.email} aria-describedby="emailHelp" onChange={e => this.onEmail(e,"email")} placeholder="Enter email" />
        
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" onChange={e => this.onEmail(e,"password")} placeholder="Password"/>
                </div>
            
                <button type="submit" className="btn btn-success" onClick={() => {this.handleLogin()}} >Submit</button>
                
            </div>

        </div>    
        </div>
    </div>    
    </div>
    </div>
    )}
  

}

export default Login;