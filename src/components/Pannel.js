import React from 'react';
import { data } from '../actions';
import YButton from './YButton'
import PropTypes from 'prop-types'


//ボタンを作って返す
function makeButtons(data)
{
  var buttons = [];
  for(var i = 0; i < data.length; i++)
  {
    var thumb = data[i]['snippet']['thumbnails']['medium']['url'];
    var link = 'https://www.youtube.com/watch?v=' + data[i]['id']['videoId'];
    //console.log("さむ " + thumb);
    buttons.push(<YButton thumb={thumb}
                          link={link}/>);
  }

  return buttons;
}

const Pannel = ({data}) => (
  <div>
  <h1> Contents </h1>
    <div className='grid-container'>
    {makeButtons(data)}
    </div>
  </div>
);
Pannel.propTypes = {
  data: PropTypes.any.isRequired
  // addCountB: PropTypes.func.isRequired
}
export default Pannel


