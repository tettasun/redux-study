import React from 'react'
//import Pannel from './Pannel'
//import SerchButton from '../containers/serchConnect'
//import SearchButton from './SearchButton'
import SearchContainer from '../containers/searchConnect'
import Panel from '../containers/pannelConnect'
import {updateData} from '../actions'

var dataObj = require('../resources/data.json');

// function updateData(){
//   console.log("update");
//   var dataObj2 = require('../resources/data2.json');
//   data(dataObj2['items']);
// }

const App = () => (
  <div>
    {console.log("App呼ばれ")}
    <SearchContainer />
    <Panel channels={dataObj['items']}/>
  </div>
)

export default App
