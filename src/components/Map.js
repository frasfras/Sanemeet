import React, { Component } from 'react';
import Airtable from 'airtable';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



const base= new Airtable({apiKey:"keyjVpG4zXCD49VfC" }).base('appOE3EFDFlsHg4X6');

export default class MainComponent extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
        eventName: 'Dolby ',
      records: [],
      latitude: 37.7749, 
     longitude:  -122.4194,
     zoom: 13
     
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
  render() {
  

   
 
    return (

       
     
      <div>  <MapContainer 
      center={[this.state.latitude, this.state.longitude]} 
      zoom={this.state.zoom} 
      style={{ width: '100%', height: '990px', position: 'absolute', top: 140,bottom: 0}}
   >
   <TileLayer
    //  attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a> '       
     attribution="'&copy; <a href=\'https://osm.org/copyright\'>OpenStreetMap contributors</a>'"
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      {
        this.state.records.map(record => {
  
        const point= [record.fields.lat,record.fields.lng];    
        if((record.fields.lat) > 0 && (record.fields.lng) != null ){
        return (
    <Marker position={point} key={record.fields.id} >
         <Popup>
            <span>name :{record.fields.Name} </span><br/>
            <span>challenge :{record.fields.event} </span><br/>
            <span>email:{record.fields.email} </span>
          <br/>
          
         </Popup>
     </Marker>
       )
       }
      })
      }
  </MapContainer>
      
    :
    </div>

      
    );
  }
}
