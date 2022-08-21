import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderIcon from "../middlewares/renderIcon";

import './css/Header.css'
import './css/Loader.css'

class Header extends Component {

  render () {
    return(
      <div className="header-container">
        <div className="city">
          {this.props.desc ? <p className="dt">{this.props.dt}</p> : <div className="loading-feels"/>}
          {this.props.desc ? this.props.city : <div className="loading-title"/>}
        </div>
        <div className="temperature">
          {this.props.desc ? this.props.temp : <div className="loading-temp"/>}
        </div>
        <div className="feelslike">
          {this.props.desc ? this.props.feels : <div className="loading-feels"/>}
        </div>
        <div className="icon-container">
          {this.props.icon ? <img className="icon" src={renderIcon(this.props.icon)} alt=""/> : <div className='loading-icon'></div>}
        </div>
        <div className="desc">
          {this.props.desc ? this.props.desc : <div className="loading-desc"/>}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ dt, city, temp, feels, icon, desc }) {
  return { dt, city, temp, feels, icon, desc };
}

export default connect(mapStateToProps)(Header);
