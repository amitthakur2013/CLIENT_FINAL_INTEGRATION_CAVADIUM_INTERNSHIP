import React, { Fragment,useEffect,useState } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';

const MapComponent=(props)=>{
	const mapStyles = {
		  width: '100%',
		  height: '90%',
		};

	const [latitude,setLat]=useState(20);
	const [longitude,setLng]=useState(79);

	useEffect(()=>{
		axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${props.address.area},${props.address.city}&key=AIzaSyA96HpW9F-aJbUan9LKhN8BpIfvo_XLeRU`)
	.then(async resp=>{
		await setLat(resp.data.results[0].geometry.location.lat);
		await setLng(resp.data.results[0].geometry.location.lng);
		
	})
	.catch(err => console.log(err));
	},[])
	
	return (
		<>
        <Map
          google={props.google}
          zoom={12}
          style={mapStyles}
          center={{ lat:`${latitude}` , lng:`${longitude}`}}
        >
          <Marker position={{ lat:`${latitude}`, lng:`${longitude}`}} />
        </Map>
        </>
    );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA96HpW9F-aJbUan9LKhN8BpIfvo_XLeRU'
})(MapComponent);