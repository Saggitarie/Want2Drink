import React, {useState, useEffect} from "react";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import history from "./history";

const ADD_USERS =  gql`
mutation ADD_USERS($first_name: String!, $last_name: String!, $email: String!, $created_at: String!){
  addUsers(
    first_name: $first_name,
    last_name: $last_name,
    email:$email,
    created_at:$created_at
  )
}
`;

export default function GoogleAuth(){
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [auth2, setAuth2] = useState({});

  const [addUsers] = useMutation(ADD_USERS);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_SIGNIN_API_KEY,
        scope: "email"
        }).then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        setAuth2(auth);
        setIsSignedIn(auth.isSignedIn.get());
        auth.isSignedIn.listen(onAuthChange)
      });
    });
  }, []);

  useEffect(() => {
    console.log("is signed in???", isSignedIn);

  }, [isSignedIn]);

  function onAuthChange () {
    console.log("onChange", auth2.listen)
    console.log(userInfo);
  };

  function onSignInClick(){
    auth2.signIn().then((signInUser) => setUserInfo(signInUser));
    setIsSignedIn(true);
    console.log(userInfo);
  };

  function onSignOutClick (){
    this.auth.signOut();
  };

  function renderAuthButton(){
    if(isSignedIn === null){
      return null;
    } else if(isSignedIn){
      return history.push("/drinkingbuddy")
    }else {
      return (
      <button onClick={() => {
        onSignInClick()
        addUsers({variables:{first_name: "Kohki", last_name: "Shiga", email: "fromClient@gmail.com", created_at:"Today"}})
      }}>Sign In to Drink</button>
      )
  }
}
  return(
  <div>
    <div>{renderAuthButton()}</div>
  </div>)
}