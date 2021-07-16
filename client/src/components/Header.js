import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderIcon from "../middlewares/renderIcon";

import './css/Header.css'

class Header extends Component {

  render () {
    return(
      <div className="header-container">
        <div className="city">
          {this.props.city}
        </div>
        <div className="temperature">
          {this.props.temp}
        </div>
        <div className="feelslike">
          {this.props.feels}
        </div>
        <div className="icon-container">
          {<img className="icon" src={renderIcon(this.props.icon)}/>}
        </div>
        <div className="desc">
          {this.props.desc}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ city, temp, feels, icon, desc }) {
  return { city, temp, feels, icon, desc };
}

export default connect(mapStateToProps)(Header);
