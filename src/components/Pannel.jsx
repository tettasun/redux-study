import React from 'react';
import YButton from './YButton'
import PropTypes from 'prop-types'


//ボタンを作って返す
function makeButtons(data)
{
  var buttons = [];
  data.map(function(d,i)
  {
    let thumb = d['snippet']['thumbnails']['medium']['url'];
    let link = 'https://www.youtube.com/watch?v=' + d['id']['videoId'];
    //console.log("さむ " + thumb);
    buttons.push(<div key={link}><YButton thumb={thumb}
                          link={link}/> </div>);
  });

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
}
export default Pannel


