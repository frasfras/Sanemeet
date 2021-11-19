import React, {useEffect,useState, Component } from 'react';
import Airtable from 'airtable';


/* import UserCard from 'components/UserCard';
import AddUserCard from 'components/AddUserCard';
import _ from 'lodash';
import GenderSortDropdown from 'components/GenderSortDropdown';
import SearchUserInput from 'components/SearchUserInput'; */
 
// import UserCardList from 'components/UserCardList';
const base= new Airtable({apiKey:"keyjVpG4zXCD49VfC" }).base('appOE3EFDFlsHg4X6');

export default class Projects extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
        eventName: 'Started Projects',
      records: [],
     
     /*  isAddSectionVisible: false,
      filterBy: 'All',
      query: '',
      defaultNumberOfRandomUsers: 6,
      eventName: 'React JS',
      selectedGender: '',
      selectedCountry: '' */
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
    base('Projects').select({view: 'Grid view'})
    .eachPage(
      (records, fetchNextPage) => {
        this.setState({
          records
        });
        console.log(records);
        fetchNextPage();
      }
    );
    


    // const table = base('Usernames');
    /* const getRecords = async ( callback) => {
         const records = await table.select().firstPage();
         console.log(records);
        //   this.setState({ records });
    
    } */
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
  

    return (

       
     
        <div>{this.renderNavbar()};
        <div className="container mt-5">
            
        <div className="row">
              <div className = 'col-lg-6'></div>
              <h3 className = 'float-right' >
            
             { this.state.records.length } Awarded  { this.state.eventName } event
             </h3>
          <div className="col">
            <div className="card-deck">
            {this.state.records.map((record,index) => <MovCard {...record.fields} />)}
            </div>
          </div>
        </div>
         
      </div></div>

      
    );
  }
}


