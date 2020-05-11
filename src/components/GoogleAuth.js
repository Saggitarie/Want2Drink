import React from "react";

import history from "./history";

/*
  Needed to write this component in class because
  functions like onAuthChange needed reference to gapi.auth2.getAuthInstance() object

  It was really difficult to implement this in functional component using hooks.
*/
class GoogleAuth extends React.Component {
  state = { isSignedIn: null};
  componentDidMount(){
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_SIGNIN_API_KEY,
        scope: "email"
        }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
        this.auth.isSignedIn.listen(this.onAuthChange)
      });
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()})
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton(){
    if(this.state.isSignedIn === null){
      return null;
    } else if(this.state.isSignedIn){
      return history.push("/drinkingbuddy")
    }else {
      return (
      <button onClick={this.onSignInClick}>Sign In to Drink</button>
      )
    }
  }

  render(){
    return<div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth;

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