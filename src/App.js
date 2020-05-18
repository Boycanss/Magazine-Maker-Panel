import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Page2 from './Pages/Page2/Page2';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact={true}
          path="/"
          component={Home}
        />
        <Route
          path="/page2"
          component={Page2}
        />
      </Router>
    )
  }
}
