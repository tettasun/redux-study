import React from 'react'
import AddCountA from '../containers/counterALink'
import AddCountB from '../containers/counterBLink'
import Pannel from './Pannel'

var list = [];
for (var i = 0; i < 100; i++){
      list.push(<AddCountA />);
     }

const App = () => (
  <div>

    <Pannel />
  </div>
)

export default App
