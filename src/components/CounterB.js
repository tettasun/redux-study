import React from 'react';
//import { addCountB } from '../actions';
import PropTypes from 'prop-types'


const CounterB = ({ count, addCountB }) => (
    <div>
        CountB:{count}
        <a href="#" onClick={() => addCountB()}>B</a>
    </div>
);
CounterB.propTypes = {
  count: PropTypes.number.isRequired,
  addCountB: PropTypes.func.isRequired
}
export default CounterB


