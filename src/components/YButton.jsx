import React from 'react';
import PropTypes from 'prop-types'

function click(link){
  location.href = link;
  console.log('click');
}

const YButton = ({thumb, link}) => (
  <img src={thumb} alt="---" onClick={() => click(link)} className="grid-item" />
);
YButton.propTypes = {
  thumb: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
export default YButton

