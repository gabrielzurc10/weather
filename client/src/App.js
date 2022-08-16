import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Body from './components/Body';

class App extends Component {

  componentDidMount() {
      this.props.fetchWeather();
      this.props.fetchDetails();
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Body} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
