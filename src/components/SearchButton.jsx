import React from 'react';
import { updateData } from '../actions'
import PropTypes from 'prop-types'

// function click(){
//   console.log("update");
//   var dataObj = require('../resources/data2.json');
//   data(dataObj['items']);
// }

 var dataObj2 = require('../resources/data2.json');
//   data(dataObj2['items']);

const SearchButton = ({updateData}) => (
  <a href="#" onClick={()=>updateData(dataObj2['items'])}>更新</a>
);
SearchButton.propTypes = {
  updateData: PropTypes.func.isRequired
}
export default SearchButton
