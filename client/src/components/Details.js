import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Details.css';

class Details extends Component {

  renderDetails(desc) {
    switch(desc) {
      case "00":
        return "no-details";
      default:
        return "details";
    }
  }

  render () {
    return (
      <div className="details-container">
        <div className={this.renderDetails(this.props.icon)}>
          <div className="info">
            {this.props.max}
            <img className="temp" src="/images/max.png"/>
          </div>
          <div className="info">
            {this.props.min}
            <img className="temp" src="/images/min.png"/>
          </div>
          <div className="info">
            {this.props.humid}
            <img className="humid"src="/images/humid.png"/>
          </div>
          <div className="info">
            {this.props.rise}
            <img className="sun" src="/images/sunrise.png"/>
          </div>
          <div className="info">
            {this.props.set}
            <img className="sun" src="/images/sunset.png"/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ max, min, humid, rise, set, icon }) {
  return { max, min, humid, rise, set, icon }
}

export default connect(mapStateToProps)(Details);
