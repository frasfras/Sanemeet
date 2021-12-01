import React, {Component} from "react";
import Airtable from 'airtable';



const base= new Airtable({apiKey:"keyjVpG4zXCD49VfC" }).base('appvxmHGlX1aYf4iK');

class Latest extends Component  {

  
  constructor(props) {
    super(props);
    console.log(props);
    
     this.state = {
        records: [],
        
       }
}
   
 
componentDidMount() {
    
    base('Hero').select({view: 'Grid view'})
    .eachPage(
      (records, fetchNextPage) => {
        this.setState({
          records
        });
        console.log(records);
        fetchNextPage();
      }
    );
    // this.loadNotes();
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
            <a className="nav-link" href="/">  <span className="sr-only">(current)</span></a>
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
        <div className="col-lg-12 col-md-12 ">
          <div className="card">
            <div classNmae="card-body">
              <span className="card-headers"><h5>{ this.state.records.length } latest challenges</h5></span>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                  
                    
                  
                  </tr>
                </thead>
                <tbody>
                {this.state.records.map((record,index) => (
                  
                  <tr key = {record.fields.id}>
                    <td> </td>
                   
                         <iframe title="add21"  id="ftech-iframe-1794" src ='https://ftech-13f5c4.ingress-erytho.easywp.com/?post_type=contest&p=31&embed=1' style={{background: "transparent", border: "1px solid #ccc", frameborder:"0",  width:"60%", height:"633px",display: "block"  }}></iframe> 
                         <iframe title="add20"  id="ftech-iframe-1794" src="https://ftech-13f5c4.ingress-erytho.easywp.com/contest/photo/?embed=1"  style={{background: "transparent", border: "1px solid #ccc", frameborder:"0",  width:"60%", height:"633px"}}></iframe> 

                    
                    <td >
                    
                      <div id="demo" >
                     
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
 
    </div>)}
  

}

export default Latest;