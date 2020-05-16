import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import DrinkingBuddy from "./components/DrinkingBuddy";
import HomePage from "./components/HomePage";



export default function App(){
  return(
    <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/drinkingbuddy" component={DrinkingBuddy} />
          </Switch>
        </Router>
    </div>
  )
}