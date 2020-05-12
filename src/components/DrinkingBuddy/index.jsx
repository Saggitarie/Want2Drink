import React, {useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
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

export default function DrinkingBuddy(){
  // const [userLocationInfo, setUserLocationInfo] = useState("");
  const {data, loading, error} = useQuery(GET_USERS_LOCATIONS);

  if(loading) return <div>Loading</div>;
  if(error) return <div>Error</div>;

  // useEffect(() => {  setUserLocationInfo(data.getUsersLocations);}, [])


  return (
    <div>
      DrinkingBuddyList
      <Map locationInfo={data.getUsersLocations}/>
    </div>
  )
}