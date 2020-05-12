import React, {useState, useEffect} from "react";

import history from "./history";
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";

/*
  Needed to write this component in class because
  functions like onAuthChange needed reference to gapi.auth2.getAuthInstance() object

  It was really difficult to implement this in functional component using hooks.

*/

export default function GoogleAuth(){
 const [isSignedIn, setIsSignedIn] = useState(null);
 const [userInfo, setUserInfo] = useState({});
 const [auth2, setAuth2] = useState({})

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
  };

  function onSignInClick(){
    auth2.signIn().then((signInUser) => setUserInfo({
      userInfo: {
        firstName: signInUser.Pt.Ad,
        lastName: signInUser.Pt.qU,
        email: signInUser.Pt.yu
      }
    }));

    setIsSignedIn(true);
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
      <button onClick={onSignInClick}>Sign In to Drink</button>
      )
    }
}

  return(
  <div>
    <div>{renderAuthButton()}</div>
  </div>)
}