import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import ScrollToTop from "./components/ScrollToTop";
import DrinkingBuddy from "./components/DrinkingBuddy/";
import HomePage from "./components/HomePage";

export default function App(){
  console.log(process.env.REACT_GOOGLE_SIGNIN_API_KEY);
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/drinkingbuddy" component={DrinkingBuddy} />
        </Switch>
      </Router>
    </div>
  )
}