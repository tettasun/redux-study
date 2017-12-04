import React from 'react'
//import Pannel from './Pannel'
//import SerchButton from '../containers/serchConnect'
//import SearchButton from './SearchButton'
import SearchContainer from '../containers/searchConnect'
import Panel from '../containers/pannelConnect'
import {data} from '../actions'

var dataObj = require('../resources/data.json');

// function updateData(){
//   console.log("update");
//   var dataObj2 = require('../resources/data2.json');
//   data(dataObj2['items']);
// }

const App = () => (
  <div>
    <SearchContainer />
    <Panel data={dataObj['items']}/>
  </div>
)

export default App
