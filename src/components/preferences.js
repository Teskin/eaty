import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import StartButton from './start_button';
import TypeOfFood from './types_of_food';
import DistanceRange from './distance_range';
import Takeway from './takeway';

class Preferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      foodType: '',
      isTakeway: false,
      range: 0
    }
  }

  render() {
    return (<div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Eaty</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">List of places</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-log-in"></span>
                  Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 sidenav">
          </div>
          <div className="col-sm-8 text-left">
            <h1>Where do you want to eat?</h1>
            <p>Follow the Wizard...</p>
            <hr/>
            <div>
              {/* // Come prendo le proprieta dei vari componenti se il primo child è router? */}
              <Router>
                <Switch>
                  <Route path='/distance-range' component={DistanceRange}/>
                  <Route path='/takeway' component={Takeway}/>
                  <Route path='/types-of-food' component={TypeOfFood}/>
                  <Route path='/' component={StartButton}/>
                </Switch>
              </Router>
            </div>
          </div>
          <div className="col-sm-2 sidenav">
            <div className="well">
              <p>ADS</p>
            </div>
            <div className="well">
              <p>ADS</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="container-fluid text-center">
        <p>Eaty S.p.A.</p>
      </footer>
    </div>);
  }
}

export default Preferences;
