import React, {useEffect,useState, Component } from 'react';
import Airtable from 'airtable';


/* import UserCard from 'components/UserCard';
import AddUserCard from 'components/AddUserCard';
import _ from 'lodash';
import GenderSortDropdown from 'components/GenderSortDropdown';
import SearchUserInput from 'components/SearchUserInput'; */
 
const base= new Airtable({apiKey:"keyjVpG4zXCD49VfC" }).base('appOE3EFDFlsHg4X6');

export default class MainComponent extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
        eventName: 'Mimosa ',
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

  /* removeUser(user) {
    const users = _.without(this.state.users, user);
    this.setState({ users });
  }

  addNewUser(user) {
    const users = this.state.users;
    users.push(user);
    this.setState({ users });
  }

  toggleAddSection() {
    this.setState({
      isAddSectionVisible: !this.state.isAddSectionVisible
    });
  }

  changeSelectedGender(selectedGender) {
    this.setState({ selectedGender })
  }

  changeSelectedCountry(selectedCountry) {
    this.setState({ selectedCountry })
  }

  filterUsers(filterBy) {
    this.setState({ filterBy });
  }

  search(query) {
    this.setState({ query });
  }

  searchByQuery(users, query) {
    const newUsers = [];
    users.forEach(user => {
      if(
        (user.name.toLowerCase().includes(query)) ||
        (user.region.toLowerCase().includes(query)) ||
        (user.email.toLowerCase().includes(query)) ||
        (user.age == query)
      ) {
        newUsers.push(user);
      }
    });
    return newUsers;
  }
 */
  renderNavbar = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Construction monitoring</a>
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
            
             { this.state.records.length } people assigned { this.state.eventName } projects
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

const MovieCard = ({id,  Name,  region,email, photo,sex }) => (
   /*  <div className="card">
      <img className="card-img-top img-fluid rounded-circle hvr-grow" src={photo} alt="Movie poster" />
      <div className="card-body">
      <h4 className="card-title">{ Name }  <i className = ''></i> </h4>
       
        <p className="card-text">{email}</p>
        <p className="card-text">
          <small className="text-muted">{region}</small>
        </p>
      </div>
    </div> */
    // 'https://dl.airtable.com/.attachmentThumbnails/0f04dd84d03272216799a09308f3f392/39f02a8a' alt="Card image cap"/>


    <div key = {id} className="card text-center">
    <img className="card-img-top img-fluid rounded-circle hvr-grow" src= 'https://hpanel.hostinger.com/img/ready-website.1928ba16.svg'  ></img>  <div className="card-block">
    <h4 className="card-title">{ Name }   </h4>
    <p>
        <a href={`mailto:${email}?Subject=Hello%20${Name}`} target="_top">
        <i className = "fa fa-envelope"/> - { email }
        </a>
    </p>
    <p className="card-text"><small className="text-muted"> { region }   </small> </p>
    <i className = 'fa fa-remove fa-2x float-right hvr-grow' > </i>
    </div>
    </div>
  );