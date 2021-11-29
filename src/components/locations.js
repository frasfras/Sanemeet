import React, {useEffect,useState, Component } from 'react';
import Airtable from 'airtable';
import Map from './Map';


 
const base= new Airtable({apiKey:"keyjVpG4zXCD49VfC" }).base('appOE3EFDFlsHg4X6');

export default class MainComponent extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
        eventName: ' ',
      records: [],
     
    };
  }

  componentWillMount() {
      console.log('willmount');
  }
  componentDidMount() {
  
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
  

   
 
    return (

       
     
      <div>  {this.renderNavbar()}
        <div align="center" className="container mt-5">
          
        <div className="row">
              <div className = 'col-lg-6'></div>
              <h3 className = 'float-right' >
            
             { this.state.records.length } people assigned { this.state.eventName } challenges
             </h3>
          <div className="col">
            <div className="card-deck">
           
            </div>
          </div>
        </div>
        <div className="container" style={{ position: 'relative' }}>
        <Map />
        </div>
         
      </div></div>

      
    );
  }
}


