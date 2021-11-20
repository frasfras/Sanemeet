import React, { Component } from 'react';
import Airtable from 'airtable';

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
        <a className="navbar-brand" href="/">Construction monitoring</a>
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
  

 
  /*   const cards = this.state.records.map((record, index) => {
        const {  Name,  region,email, photo,Sex } = this.props.record;
        const flagClassName = `flag-icon flag-icon-${ISO(region)}`;
      const genderSign = Sex == 'F' ? 'fa fa-venus' : 'fa fa-mars';
        const card =
      <div key = {index} className="card text-center">
        <img className="card-img-top img-fluid rounded-circle hvr-grow" src= { photo } alt="Card image cap"/>
        <div className="card-block">
          <h4 className="card-title">{ name }  <i className = { genderSign }></i> </h4>
          <p>
            <a href={`mailto:${email}?Subject=Hello%20${name}`} target="_top">
              <i className = "fa fa-envelope"/> - { email }
            </a>
          </p>
          <p className="card-text"><small className="text-muted"> { region }  <span className = {flagClassName}> </span> </small> </p>
          <i className = 'fa fa-remove fa-2x float-right hvr-grow' > </i>
        </div>
      </div>
      return card;
    }) */

    
    
    

    return (

       
      /*   <div>
            <h1>hello</h1>
      
          <div className = 'col-lg-6'>
            <h3 className = 'float-right' >
            
             { this.state.records.length } people attending { this.state.eventName } event
             </h3>
          </div>
          <div className='row'>
            <div className = 'col-lg-12'>
                <div className = 'card-columns'>
                {this.state.records.map((record,index) => <MovieCard {...record.fields} />)}
              
                </div>
            </div>
           </div>
        </div> */
        
        <div className="container mt-5">
            
        <div className="row">
              <div className = 'col-lg-6'></div>
              <h3 className = 'float-left' >
            
             { this.state.records.length } Awarded  { this.state.eventName } event
             </h3>
          <div className="col">
            <div className="card-deck">
            {this.state.records.map((record,index) => <MovCard {...record.fields} />)}
            </div>
          </div>
        </div>
         
      </div>

      
    );
  }
}

const MovCard = ({id,  Name,  notes,Type, status, amount,email }) => (
  
    // 'https://dl.airtable.com/.attachmentThumbnails/0f04dd84d03272216799a09308f3f392/39f02a8a' alt="Card image cap"/>


    <div key = {id} className="card text-center">
    <img className="card-img-top img-fluid rounded-circle hvr-grow" 
    src= 'data:image/png;base64,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'  ></img>  <div className="card-block">
    <h4 className="card-title">{ Name }   </h4>
    <p>
        <a href={`mailto:${email}?Subject=Hello%20${Name}`} target="_top">
        <i className = "fa fa-envelope"/> - { email }
        </a>
    </p>
    <p className="card-text"><small className="text-muted"> amount | {amount}  </small> </p>
    <i alt='remov' className = 'fa fa-remove fa-2x float-right hvr-grow' > </i>
    </div>
    </div>

    
  );

