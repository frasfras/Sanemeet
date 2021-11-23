import React, {Component } from 'react';
import Airtable from 'airtable';



const base= new Airtable({apiKey:"keyjVpG4zXCD49VfC" }).base('appvxmHGlX1aYf4iK');

export default class Challenge extends Component {
 

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
    base('Contests').select({view: 'Grid view'})
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
        <a className="navbar-brand" href="/">Challenge monitoring</a>
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
        <div className="container mt-5">
            
        <div className="row">
              <div className = 'col-lg-6'></div>
              <h3 className = 'float-right' >
            
             { this.state.records.length } current { this.state.eventName }  people joined 
             </h3>
          <div className="col">
            <div className="card-deck">
           
            </div>
          </div>
        </div>
        <div className="container">
        <table class="table bg-warning"> 
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Requirments</th>
            <th scope="col">banner</th>
            </tr>
        </thead>
        {this.state.records.map((record,index) => (
             <tr key = {record.fields.id}>
             <t>{record.fields.id}</t>    
             <td>{ record.fields.Name }</td>
             <td>{record.fields.Notes}</td>
             <td><img src={record.fields.Attachment} /></td>
           </tr>
        ))}
   
        
        </table>
        </div>
         
      </div></div>

      
    );
  }
}
