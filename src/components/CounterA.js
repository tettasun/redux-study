import React from 'react';
//import { addCountA } from '../actions';
import PropTypes from 'prop-types'

const CounterA = ({ count, addCountA }) => (
    <div>
        CountA:{count}
        <a href="#" onClick={() => addCountA()}>A</a>
    </div>
);
CounterA.propTypes = {
  count: PropTypes.number.isRequired,
  addCountA: PropTypes.func.isRequired
}

export default CounterA

