import React, {useState, useEffect} from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import {gql} from "apollo-boost";

import Map from "../Map";

const GET_USERS = gql`
query{
  users{
    first_name
    last_name
    email
  }
}
`;

const GET_USERS_LOCATIONS = gql`
query{
  getUsersLocations{
    first_name
    last_name
    latitude
    longitude
    location_set_time
    drinking_place_name
  }
}
`;

const ADD_USER_CURRENT_LOCATION = gql`
  mutation ADD_CURRENT_LOCATION($longitude: Float!, $latitude: Float!, $drinking_place_name: String!, $location_set_time: String!, $time_expiration: Boolean!, $user_location_id: Int!  ){
    addCurrentLocation(
        longitude: $longitude
        latitude: $latitude
        drinking_place_name: $drinking_place_name
        location_set_time: $location_set_time
        time_expiration: $time_expiration
        user_location_id: $user_location_id
    )
  }
`;

export default function DrinkingBuddy(){
  // const [userLocationInfo, setUserLocationInfo] = useState("");
  const {data, loading, error} = useQuery(GET_USERS_LOCATIONS);
  const [addLocation] = useMutation(ADD_USER_CURRENT_LOCATION)

  if(loading) return <div>Loading</div>;
  if(error) return <div>Error</div>;

  // useEffect(() => {  setUserLocationInfo(data.getUsersLocations);}, [])


  return (
    <div>
      DrinkingBuddyList
      <button onClick={() => {addLocation({variables: {
        longitude: 35.670662,
        latitude: 139.759189,
        drinking_place_name: "200 SpecialBar Ginza",
        location_set_time: "2020-05-13 17:10:25-07",
        time_expiration: false,
        user_location_id: 10
      }})}}>Add Location</button>
      <Map locationInfo={data.getUsersLocations}/>
    </div>
  )
}