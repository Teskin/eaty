import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Slider from '../styles/slider.css';

class DistanceRange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      range: 0
    };
  }

  onChangeEvent(range) {
    this.setState({range});
  }

  render() {
    return (<div className="slidecontainer">
      <p>Raggio chilometrico:
      </p>
      <input type="range" min="1" max="100" value={this.state.range} onChange={(event) => {this.onChangeEvent(event.target.value);}} className="slider"/>
    </div>);
  }
}

export default DistanceRange;
