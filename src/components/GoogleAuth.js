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

// class GoogleAuth extends React.Component {
//   state = {
//     isSignedIn: null,
//     userInfo: {}
//   };

// //   ADD_USERS = gql`
// //   mutation AddTodo($type: String!) {
// //     addUsers(
// //       first_name: ${this.state.userInfo.firstName},
// //       last_name: ${this.state.userInfo.lastName},
// //       email:${this.state.userInfo.email},
// //       created_at:${Date.now()}
// //     )
// //   }
// // `;


//   componentDidMount(){

//   }

  // onAuthChange = () => {
  //   this.setState({isSignedIn: this.auth.isSignedIn.get()})
  // };

  // onSignInClick = () => {
  //   this.auth.signIn().then((signInUser) => this.setState({
  //     userInfo: {
  //       firstName: signInUser.Pt.Ad,
  //       lastName: signInUser.Pt.qU,
  //       email: signInUser.Pt.yu
  //     }
  //   }));
  // };

//   onSignOutClick = () => {
//     this.auth.signOut();
//   };

  // renderAuthButton(){
  //   if(this.state.isSignedIn === null){
  //     return null;
  //   } else if(this.state.isSignedIn){
  //     return history.push("/drinkingbuddy")
  //   }else {
  //     return (
  //     <button onClick={this.onSignInClick}>Sign In to Drink</button>
  //     )
  //   }
  // }

//   render(){
//     return(
//     <div>
//       {/* <Mutation mutation={() => this.ADD_USERS}> */}
//       {this.renderAuthButton()}
//       {/* </Mutation> */}
//     </div>)
//   }
// }

// export default GoogleAuth;

// export default function GoogleAuth(){
//   const [isSignedIn, setIsSignedIn] = useState(null);
//   const [authData, setAuthData] = useState();

//   useEffect(() => {
//     window.gapi.load("client:auth2", () => {
//       window.gapi.client.init({
//         clientId: "438614016365-dtul6b38p01kkq18janveggvu0ornkeh.apps.googleusercontent.com",
//         scope: "email"
//       }).then(() => {
//         const auth = window.gapi.auth2.getAuthInstance();
//         setAuthData(auth);
//         setIsSignedIn(auth.isSignedIn.get());
//       })
//     })
//   }, []);

//   useEffect(() => {},[isSignedIn]);


//   return (
//     <div>{renderAuthButton(isSignedIn, authData)}</div>
//   )
// }