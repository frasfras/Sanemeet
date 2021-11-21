import React, {Component} from 'react';

// import Card from "./card";



class Home extends Component {

     

      renderTabStyle2 = ()  => {
        return (
          <section class="container-fluid" id="slanted">
          <div class="row">
            <div class="container">
              <div class="slanted_tabbing_section">
                <div class="tabs_title">
                  <h2 class="title">Tabsh Style 3</h2>
                  <div class="bar"></div>
                  </div>
                <div class="slanted_tabbing_content">
                  <div class="slanted_tabs_part">
                    <ul class="nav nav-tabs nav-tabs-neutral" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active d-flex flex-wrap align-items-center justify-content-center" data-toggle="tab" href="#home" role="tab">
                          <span class="fa fa-home"></span>
                          <p>Home</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link d-flex flex-wrap align-items-center justify-content-center" data-toggle="tab" href="#archive" role="tab">
                          <span class="fa fa-archive"></span>
                          <p>Archive</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link d-flex flex-wrap align-items-center justify-content-center" data-toggle="tab" href="#upload" role="tab">
                          <span class="fa fa-upload"></span>
                          <p>Upload</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link d-flex flex-wrap align-items-center justify-content-center" data-toggle="tab" href="#analytics" role="tab">
                          <span class="fa fa-desktop"></span>
                          <p>Analytics</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link d-flex flex-wrap align-items-center justify-content-center" data-toggle="tab" href="#setting" role="tab">
                          <span class="fa fa-cog"></span>
                          <p>Settings</p>
                        </a>
                      </li>
                    </ul>
                  </div>
    
                  <div class="slanted_tabs_content">
                    <div class="tab-content">
                      <div class="tab-pane active" id="home" role="tabpanel">
                        <div class="slanted_right_tabs_content">
                          <div class="d-flex flex-wrap justify-content-between">
                            
                            <div class="col-md-12">
                              <div class="slantedContent">
                                <div class="slanted-header">
                                  <h2 class="slanted-title">
                                    Home
                                  </h2>
                                </div>
                                <div class="slanted-body">
                                  <div class="slanted-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <div className="Row">
      <div className="col-lg-12 col-md-8 col-sm-6 col-xs-12">
      <div className="card">
          <div className="card-header">
            Manage Projects
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a><a href="/" className="btn btn-default">cancel</a>
          </div>
        </div>
      </div>
    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="archive" role="tabpanel">
                        <div class="slanted_right_tabs_content">
                          <div class="d-flex flex-wrap justify-content-between flex-md-row-reverse">
                            <div class="col-md-12">
                              <div class="slantedContent">
                                <div class="slanted-header">
                                  <h2 class="slanted-title">
                                    Archive
                                  </h2>
                                </div>
                                <div class="slanted-body">
                                  <div class="slanted-desc">
                                    <p> is nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="upload" role="tabpanel">
                        <div class="slanted_right_tabs_content">
                          <div class="d-flex flex-wrap justify-content-between">
                            <div class="col-md-4">
                              <div class="slantedImg">
                                <figure>
                                  <img src="assets/img/features-img1.png" alt="Features" class="img-fluid"/>
                                </figure>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="slantedImg">
                                <figure>
                                  <img src="assets/img/features-img1.png" alt="Features" class="img-fluid"/>
                                </figure>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="slantedImg">
                                <figure>
                                  <img src="assets/img/features-img1.png" alt="Features" class="img-fluid"/>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="analytics" role="tabpanel">
                        <div class="slanted_right_tabs_content">
                          <div class="d-flex flex-wrap justify-content-between flex-md-row-reverse">
                            <div class="col-md-6">
                              <div class="slantedImg">
                                
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="slantedContent">
                                <div class="slanted-header">
                                  <h2 class="slanted-title">
                                    Analytics
                                  </h2>
                                </div>
                                <div class="slanted-body">
                                  <div class="slanted-desc">
                                    <p> dolore eu fugiat nulla pariatur.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="setting" role="tabpanel">
                        <div class="slanted_right_tabs_content">
                          <div class="d-flex flex-wrap justify-content-between">
                            <div class="col-md-6">
                              <div class="slantedImg">
                              
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="slantedContent">
                                <div class="slanted-header">
                                  <h2 class="slanted-title">
                                    Settings
                                  </h2>
                                </div>
                                <div class="slanted-body">
                                  <div class="slanted-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        )
  }
   renderTabStyle1 = () => {
       return (
        <section className="container-fluid windowHeight" id="trinity">
          <div className="row">
            <div className="container">
              <div className="trinity_tabs_part">
                <div className="tabs_title">
                  <h2 className="title">Challenge Buddy </h2>
                  <div className="bar"></div>
                  </div>
                <div className="d-flex flex-wrap align-items-center">
                  <div className="trinity_tabs_left_part">
                    <ul className="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#design" role="tab">
                          <span className="fa fa-pencil-alt"></span>
                          <p>Track </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#frontend" role="tab">
                          <span className="fa fa-desktop"></span>
                          <p>Front-End Manage</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#backend" role="tab">
                          <span className="fa fa-database"></span>
                          <p>Back-End Reports </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="trinity_tabs_right_part">	
                    <div className="tab-content">
                      <div className="tab-pane active" id="design" role="tabpanel">
                        <div className="trinity_tab_content">
                          <div className="d-flex flex-wrap">
                            <div className="col-md-8">
                              <div className="trinity_tab_content_head">
                                  <h2 className="title">Resources</h2>
                                </div>
                                <div className="trinity_tab_content_description">
                                  <p>
                                  </p>
                                </div>
                                <div className="trinity_tab_content_btn">
                                  <a href="/persons">Get Started </a>
                                  ||
                                   <a href="/projects">Join Challenges/ projects </a>
                                   
                            
                                </div>
                            </div>
                            <div className="col-md-4">
                              <div className="trinity_tab_content_img">
                                
                              </div>
                            </div>
                          </div>	
                        </div>
                      </div>
                      <div className="tab-pane" id="frontend" role="tabpanel">
                        <div className="trinity_tab_content">
                          <div className="d-flex flex-wrap">
                            <div className="col-md-8">
                              <div className="trinity_tab_content_head">
                                  <h2 className="title">Challenges  List</h2>
                                  <ul>
                                    <li>TO DO</li>
                                  </ul>
                                </div>
                                <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Video challenge</button>
              
                                 <div id="demo" >
                                  <iframe title="add2" class="airtable-embed" id="ftech-iframe-1794" src="https://ftech.azurewebsites.net/?post_type=contest&p=1794&embed=1"  style={{background: "transparent", border: "1px solid #ccc", frameborder:"0",  width:"100%", height:"633px"}}></iframe> 
                                                             
                                 </div>   
                              
                              
                                <div className="trinity_tab_content_description">
                                      <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo11">Fitness challenge</button>
                                </div>
                                <div className="trinity_tab_content_btn">
                                       <div id="demo11" class="collapse">
                                       <iframe title="add11" class="airtable-embed" id="ftech-iframe-1798" src="https://ftech.azurewebsites.net/?post_type=contest&p=1798&embed=1"  style={{background: "transparent", border: "1px solid #ccc", frameborder:"0",  width:"100%", height:"833px"}}></iframe>

                                       </div>
                                  <a href="https://airtable.com/shrOBxsjr7Idtrtuv">Create challenge </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                              <div className="trinity_tab_content_img">
                                
                              </div>
                            </div>
                          </div>	
                        </div>
                      </div>
                      <div className="tab-pane" id="backend" role="tabpanel">
                        <div className="trinity_tab_content">
                          <div className="d-flex flex-wrap">
                            <div className="col-md-8">
                              <div className="trinity_tab_content_head">
                                  <h2 className="title">Placeholder </h2>
                                </div>
                                <div className="trinity_tab_content_description">
                                  <p> </p>
                                </div>
                                <div className="trinity_tab_content_btn">
                                  <a href="/">Get Started</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                              <div className="trinity_tab_content_img">
                                
                              </div>
                            </div>
                          </div>	
                        </div>
                      </div>
                    </div>
                  </div>
                </div>		
              </div>
            </div>
          </div>
        </section>
    
       )

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
              <a className="nav-link" href="/register">Join Video conference <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>
            </li>


          </ul>
        
        </div>
      </nav>

      )
   }
   renderhelloworld = () => {
    return(
      <div className="Row">
      <div className="col-lg-12 col-md-8 col-sm-6 col-xs-12">
      <div className="card">
          <div className="card-header">
            Manage Projects
          </div>
         
          <div className="card-body">
            {/* <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a><a href="#" className="btn btn-default">cancel</a> */}
          
          {/* <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select 
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Mimosa</a>
                <a class="dropdown-item" href="#">Chapel</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
            </div> */}
          
          </div>
         
        </div>
      </div>
      {this.renderTabStyle2()}
    </div>
        
     )
   }

   render(){
    return(
     <div>
        {this.renderNavbar()}
        {this.renderTabStyle1()}
        {/* {this.renderTabStyle2()} */}
       
     <div className="container-fluid padding-10">
          {/* {this.renderhelloworld()} */}
      
     </div>
     </div>  
    )

  }

}

export default Home;
