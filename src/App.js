import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Introduction from "./components/Introduction";
import Aboutme from "./components/Aboutme";
import Project from "./components/Project";
import Default from "./components/Default";

class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/project" component={Project} />
        <Route component={Default} />
      </Switch>
      
    </React.Fragment>
  )
  }
}
export default App;