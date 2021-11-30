import React, {Component} from "react";
import Navbar from "../register/navbar";
import Airtable from 'airtable';
import axios from "axios";
import { randomInt } from "d3";

const base= new Airtable({apiKey:"keyjVpG4zXCD49VfC" }).base('appvxmHGlX1aYf4iK');

class Dashboard extends Component  {

  
  constructor(props) {
    super(props);
    console.log(props);
    
     this.state = {
         
        records: [],
        posts: []
       }
}
   
 
componentDidMount() {
    
    base('Contests').select({view: 'Grid view'})
    .eachPage(
      (records, fetchNextPage) => {
        this.setState({
         posts: records
        });
        console.log(records);
        fetchNextPage();
      }
    );
    this.loadNotes();
 }
 loadNotes(){
    base('Posts').select({view: 'Grid view'})
    .eachPage(
      (records, fetchNextPage) => {
        this.setState({
          records 
        });
        console.log(records);
        fetchNextPage();
      }
    );

 }
 


 
 renderNotes = () => {
    return (
        <div style={{ width: '100%'}}>
        <table className="table table-striped"  >
        <thead>
          <tr>
            <th>Challenge</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {this.state.posts.map((post,index) => (
          <tr key = {randomInt(100)}>
            
            <td>{post.fields.Name}</td>
            <td>{post.fields.Notes}</td>
            <td style={{width: '400px'}}>
              <a href="#demo" data-toggle="collapse" onClick={console.log('hello')} class="btn btn-success">Details</a>
            
              <div id="demo" class="collapse">
                {post.fields.Notes}
              </div>
             
            </td>
          </tr>
        ))}
        </tbody>
      </table>   </div>
    )
 }

 renderNavbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Challenge monitoring</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">Logout <span className="sr-only">(current)</span></a>
          </li>
         


        </ul>
      
      </div>
    </nav>

    )
  }


  render(){


    return(
        <div> 
            {this.renderNavbar()}
            <br></br>
            {/* <!-- Section: Posts --> */}
  <section className="section section-posts grey lighten-4">
    <div className="container">
      <div className="row align-center">
        <div className="col-lg-8 ">
          <div className="card">
            <div classNmae="card-body">
              <span className="card-headers"><h5>Posts</h5></span>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Description</th>
                    
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.records.map((record,index) => (
                  <tr key = {randomInt(100)}>
                    <td>Post </td>
                    <td>{record.fields.Name}</td>
                    <td>{record.fields.Notes}</td>
                    <td style={{width: '400px'}}>
                      <a href="#demo" data-toggle="collapse" onClick={console.log('hellox')} class="btn btn-success">Details</a>
                    
                      <div id="demo" class="collapse">
                       From {record.fields.start} - To -{record.fields.end}
                      </div>
                      <div id="demo" class="collapse">
                        
                      </div>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              
            </div>
           
          </div>
        </div>
       
      </div>
    </div>
  </section>
  <section className="section section-posts grey lighten-4">
    <div className="container">
      <div className="row align-center">
        <div className="col-lg-8 ">
          <div className="card">
            <div classNmae="card-body">
              <span className="card-headers"><h5></h5></span>
             {this.renderNotes()}
            </div>
           
          </div>
        </div>
      </div>
      </div>
    </section>    
    </div>)}
  

}

export default Dashboard;