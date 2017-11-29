import React from 'react';
//import { addCountB } from '../actions';
import PropTypes from 'prop-types'

function click(){
  console.log('click');
}

const YButton = () => (
    <div>
        <a href="#" onClick={() => click()}>Button</a>
    </div>
);
YButton.propTypes = {
  // count: PropTypes.number.isRequired,
  // addCountB: PropTypes.func.isRequired
}
export default YButton

