import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Takeway = (props) => {
  return (<div>
    <h3>Vuoi mangiare</h3>
    <Link className='btn btn-info' to='/distance-range'>sul posto</Link>
    <Link className='btn btn-primary' to='/distance-range'>d'asporto</Link>
  </div>);
}

export default Takeway;
