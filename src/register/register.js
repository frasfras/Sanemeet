import React, {Component} from "react";

import Navbar from "./navbar";
import axios from "axios";

class Register extends Component  {

  constructor(props) {
    super(props);
    console.log(props);
     this.state = {
       user:{email: "", password:""}
      }
}
   
    onEmail = (e, origin) => {
       let{user}= this.state;
       switch(origin){
        case "email":
        this.setState({user:{...user, email:e.target.value}});
        break;
        case "password":
        this.setState({user:{...user, password:e.target.value}});
        break;

       }
    }
    handleSubmit = async () => {
      let{user} = this.state;
      let  formData = new FormData();
      
      formData.append("email", user.email);
      formData.append("password", user.password);

       let url = "http://localhost/tracker/api/register.php";

      axios({
        method: 'post',
        url: url,
        data: formData
      })
      .then((response) => {
        if(response.data.status === 200){
          alert('registration success');
          window.location.href('/login');
        }
        console.log(response);
      });
    }
    render(){
        return(
            <div> 
                <Navbar /> 
                <br></br>
        {/* <div className="container align-items-center justify-content-center">
            <div className="Row align-items-center justify-content-center" >
            <div className="col-lg-6 col-md-12 col-sm-12 col-sx-12">
            <div className="card">
                <div className="card-header">
                    Register
                </div>
                <div className="card-body">
                
                <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="email"   onChange={e => this.onEmail(e,"email")}  aria-describedby="emailHelp" placeholder="Enter email" />
            
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="password"  onChange={e => this.onEmail(e,"password")} placeholder="Password"/>
                    </div>
                
                    <button type="submit" className="btn btn-success" onClick={() => {this.handleSubmit()}}>Submit</button>
                    
                </div>

            </div>    
            </div>
        </div>    
        </div> */}
        </div>
        )
    
      }
        
}

export default Register;