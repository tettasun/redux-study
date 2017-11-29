import React from 'react';
//import { addCountA } from '../actions';
import PropTypes from 'prop-types'
import axios from 'axios'

const request = function(){
         axios.get('/mock/json')
          .then(function (response) {
           console.log(response);

            console.log(typeof(response['data']));

            for(var i of response['data']){
             console.log("key:" + i);
//             var key = i;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
}

const CounterA = ({ count, addCountA }) => (
    <div>
        <p className="Title">CountA:{count}</p>
        <a href="#" onClick={() => addCountA()}>A</a>
        <a href="#" onClick={() => request() }>XXXX</a>

    </div>
);
CounterA.propTypes = {
  count: PropTypes.number.isRequired,
  addCountA: PropTypes.func.isRequired
}

export default CounterA

