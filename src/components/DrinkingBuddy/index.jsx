import React, {useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import {gql} from "apollo-boost";

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
  // const {data, loading, error} = useQuery(GET_USERS);
  const {data, loading, error} = useQuery(GET_USERS_LOCATIONS);

  useEffect(() => {

  }, []);

  if(loading) return <div>Loading</div>;
  if(error) return <div>Error</div>;

  // console.log("all users" + JSON.stringify(data));
  console.log(data);

  return (
    <div>
      DrinkingBuddyList
    </div>
  )
}