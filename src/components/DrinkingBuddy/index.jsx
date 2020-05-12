import React from "react";
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

export default function DrinkingBuddy(){
  const {data, loading, error} = useQuery(GET_USERS);

  if(loading) return <div>Loading</div>;
  if(error) return <div>Error</div>;

  console.log("all users" + JSON.stringify(data));

  return (
    <div>
      DrinkingBuddyList
    </div>
  )
}