import React, {useEffect,useState, Component } from 'react';
import Airtable from 'airtable';



const base= new Airtable({apiKey:"keyjVpG4zXCD49VfC" }).base('appOE3EFDFlsHg4X6');

export default class MainComponent extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
        eventName: 'Challenges ',
      records: [],
     
    };
  }

  componentWillMount() {
      console.log('willmount');
  }
  componentDidMount() {
    /* fetch('https://api.airtable.com/v0/appOE3EFDFlsHg4X6/Usernames?api_key=keyjVpG4zXCD49VfC')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ users: data.records });
    }).catch(err => {
      // Error
    }); */
    base('Usernames').select({view: 'Grid view'})
    .eachPage(
      (records, fetchNextPage) => {
        this.setState({
          records
        });
        console.log(records);
        fetchNextPage();
      }
    );
    
    // getRecords();
 

   /*  getUsers(5, users => {
      this.setState({ users });
    }); */
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
              <a className="nav-link" href="/register"> <span className="sr-only">(current)</span></a>
            </li>
           


          </ul>
        
        </div>
      </nav>

      )
   }
  render() {
  

    const currentUsers = this.state.records;
 
    return (

       
     
      <div>  {this.renderNavbar()}
        <div className="container mt-5">
            
        <div className="row">
              <div className = 'col-lg-6'></div>
              <h3 className = 'float-right' >
            
             { this.state.records.length } people joined { this.state.eventName } 
             </h3>
          <div className="col">
            <div className="card-deck">
           
            </div>
          </div>
        </div>
        <div className="container">
        <table class="table"> 
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Location</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        {this.state.records.map((record,index) => (
             <tr key = {record.fields.id}>
             <t>{record.fields.id}</t>    
             <td>{ record.fields.Name }</td>
             <td>{record.fields.region}</td>
             <td>{record.fields.email}</td>
           </tr>
        ))}
   
        
        </table>
        </div>
         
      </div></div>

      
    );
  }
}
const participant = ({id,  Name,  region,email, photo,sex }) => (
    <tr key = {id}>
    
      <td>{ Name }</td>
      <td>{region}<a href='#'>link</a></td>
      <td>{email}</td>
    </tr>
  
);

