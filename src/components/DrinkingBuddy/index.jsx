import React, {useState, useEffect} from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import {gql, toPromise} from "apollo-boost";
import BarDropdown from "../DropDown";
import { Button, Card, Icon, Image  } from 'semantic-ui-react'

import Map from "../Map";
import "./DrinkingBuddy.scss";

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

const selectBarOptions = [
  {
    longitude: 139.759189,
    latitude: 35.670662,
    drinking_place_name: "300 Bar Ginza",
    location_set_time: "2020-05-13 17:10:25-07",
    time_expiration: false,
    user_location_id: 10
  },
  {
    longitude: 139.748398,
    latitude: 35.738504,
    drinking_place_name: "Bonjour Tokyo Bar",
    location_set_time: "2020-05-13 17:10:25-07",
    time_expiration: false,
    user_location_id: 10
  },
  {
    longitude: 139.695702,
    latitude: 35.658577,
    drinking_place_name: "Beat Cafe",
    location_set_time: "2020-05-13 17:10:25-07",
    time_expiration: false,
    user_location_id: 10
  },
  {
    longitude: 139.670264,
    latitude: 35.662889,
    drinking_place_name: "Bar Ghetto",
    location_set_time: "2020-05-13 17:10:25-07",
    time_expiration: false,
    user_location_id: 10
  },
  {
    longitude: 139.709162,
    latitude: 35.658983,
    drinking_place_name: "Aoyama Tunnel",
    location_set_time: "2020-05-13 17:10:25-07",
    time_expiration: false,
    user_location_id: 10
  },
  {
    longitude: 139.706730,
    latitude: 35.691305,
    drinking_place_name: "8bit cafe",
    location_set_time: "2020-05-13 17:10:25-07",
    time_expiration: false,
    user_location_id: 10
  },
]

export default function DrinkingBuddy(){
  const [selectedBar, setSelectedBar] = useState("");
  const {data, loading, error} = useQuery(GET_USERS_LOCATIONS);
  const [addLocation] = useMutation(ADD_USER_CURRENT_LOCATION, {
    refetchQueries: mutationResult => [{query: GET_USERS_LOCATIONS}]
  });

  function locationSelected(){
    const tmp = selectBarOptions.find(location => location.drinking_place_name === selectedBar);
    console.log(tmp);

    addLocation({variables: {
      longitude: tmp.longitude,
      latitude: tmp.latitude,
      drinking_place_name: tmp.drinking_place_name,
      location_set_time: tmp.location_set_time,
      time_expiration: tmp.time_expiration,
      user_location_id: 10
    }})
  }

  if(loading) return <div>Loading</div>;
  if(error) return <div>Error</div>;

  return (
    <div className="drinking-buddy">
      <p className="drinking-buddy__title">Drinking Buddies</p>
      <div>
        <BarDropdown setSelectedBar={setSelectedBar}/>
      </div>
      <div>
        <Button onClick={() => locationSelected()}>Set your drinking place</Button>
      </div>

      <div className="drinking-buddy__map">
        <Map locationInfo={data.getUsersLocations}/>
      </div>
      <div className="users__profile">
      {data.getUsersLocations.map((user, index) => {
        return (
        <Card key={index}>
          <Image src={`/${index + 1}.jpg`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{`${user.first_name} ${user.last_name}`}</Card.Header>
            <Card.Meta>
              <span className='date'>Wanna Drink?</span>
            </Card.Meta>
            <Card.Description>
              {`Drinking at ${user.drinking_place_name}`}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='time' />
              {`Started Drinking from ${user.location_set_time}`}
            </a>
          </Card.Content>
        </Card>)
      })}
      </div>
    </div>
  )
}