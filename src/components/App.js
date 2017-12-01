import React from 'react'
import Pannel from './Pannel'

var channels = [];
var dataObj = require('../resources/data.json');

const App = () => (
  <div>
    <Pannel data={dataObj['items']}/>
  </div>
)

export default App
