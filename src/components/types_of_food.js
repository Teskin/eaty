import React from 'react';
import {Link} from 'react-router-dom';

const TypeOfFood = props => {
  return (<div>
    <select>
      <option value='italian'>Italiano</option>
      <option value='japanese'>Giapponese</option>
      <option value='indian'>Indiano</option>
      <option value='chinese'>Cinese</option>
      <option value='greek'>Greco</option>
      <option value='street-food'>Street food</option>
    </select>
    <br/>
    <Link className='btn btn-primary' to='/takeway'>Next</Link>
  </div>);
}

export default TypeOfFood;
