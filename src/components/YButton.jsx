import React from 'react';
//import { addCountB } from '../actions';
import PropTypes from 'prop-types'

function click(link){
  location.href = link;
  console.log('click');
}

const YButton = ({thumb, link}) => (

    <div>
      <img src={thumb} alt="---" onClick={() => click(link)} className="grid-item"/>
    </div>
);
YButton.propTypes = {
  thumb: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
export default YButton

