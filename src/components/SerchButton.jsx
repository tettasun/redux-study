import React from 'react';
import { data } from '../actions'
import PropTypes from 'prop-types'

// function click(){
//   console.log("update");
//   var dataObj = require('../resources/data2.json');
//   data(dataObj['items']);
// }

const SerchButton = (onClick) => (
  <a href="#" onClick={()=>onClick()}>更新</a>
);
SerchButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
export default SerchButton

