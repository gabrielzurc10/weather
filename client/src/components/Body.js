import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Details from './Details';
import Search from './Search';

import renderBackground from '../middlewares/renderBackground';
import './css/Body.css';

class Body extends Component {
  render () {
    return (
      <div className={"body-container "+renderBackground(this.props.icon)}>
      <div className="body-card">
        <Header />
        <Details />
        </div>
        <Search />
      </div>
    );
  }
}

function mapStateToProps({ icon }) {
  return { icon };
}

export default connect(mapStateToProps)(Body);
