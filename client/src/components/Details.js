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

          <div className="info tooltip">
            {this.props.max}
              <img className="temp" src="/images/max.png" alt="Highest"/>
              <div class="bottom">
                <h3>Highest</h3>
                <i></i>
              </div>
          </div>

          <div className="info tooltip">
            {this.props.min}
            <img className="temp" src="/images/min.png" alt="Lowest"/>
            <div class="bottom">
              <h3>Lowest</h3>
              <i></i>
            </div>
          </div>

          <div className="info tooltip">
            {this.props.humid}
            <img className="humid"src="/images/humid.png" alt="Humidity"/>
            <div class="bottom">
              <h3>Humidity</h3>
              <i></i>
            </div>
          </div>

          <div className="info tooltip">
            {this.props.rise}
            <img className="sun" src="/images/sunrise.png" alt="Sunrise"/>
            <div class="bottom">
              <h3>Sunrise</h3>
              <i></i>
            </div>  
          </div>

          <div className="info tooltip">
            {this.props.set}
            <img className="sun" src="/images/sunset.png" alt="Sunset"/>
            <div class="bottom">
              <h3>Sunset</h3>
              <i></i>
            </div>  
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
