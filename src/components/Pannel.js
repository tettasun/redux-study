import React from 'react';
//import { addCountB } from '../actions';
import YButton from './YButton'
import PropTypes from 'prop-types'

function click(){
  console.log("click");
}

const Pannel = () => (
    <YButton />
);
Pannel.propTypes = {
  // count: PropTypes.number.isRequired,
  // addCountB: PropTypes.func.isRequired
}
export default Pannel


