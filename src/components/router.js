import React, { Component } from 'react';
import {Apps} from '../components/Apps'
import {Details} from '../components/details'
import '../styles/App.css';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="Apps">
	      	<Route exact path = '/' component = {Apps} ></Route>
	      	<Route path = '/apps' component = {Apps} ></Route>
	      	<Route path = '/details' component = {Details} ></Route>
	      </div>
    	</Router>
    );
  }
}

export default App;
