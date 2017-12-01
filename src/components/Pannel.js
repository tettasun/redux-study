import React from 'react';
import { data } from '../actions';
import YButton from './YButton'
import PropTypes from 'prop-types'

var buttons = [];
for(var i = 0; i < 9; i++)
{
  buttons.push(<YButton />);
}

const Pannel = ({data}) => (
  <div>
  <h1> Pannel Mock </h1>
  {buttons}
  </div>
);
Pannel.propTypes = {
  data: PropTypes.any.isRequired
  // addCountB: PropTypes.func.isRequired
}
export default Pannel


