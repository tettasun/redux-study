import React from 'react';
import YButton from './YButton'
import PropTypes from 'prop-types'


//ボタンを作って返す
function makeButtons(channels)
{
  var buttons = [];
  if (!channels)
  {
    return null;
  }

  console.log("タイプ " + typeof channels);
  channels.map(function(d,i)
  {
    let thumb = d['snippet']['thumbnails']['medium']['url'];
    let link = 'https://www.youtube.com/watch?v=' + d['id']['videoId'];
    console.log("タイトル " + d['snippet']['title']);
    buttons.push(<div key={link}><YButton thumb={thumb}
                          link={link}/> </div>);
  });

  return buttons;
}

const Pannel = ({channels}) => (
  <div>
  {console.log("パネル " ,channels)}
  <h1> Contents </h1>
    <div className='grid-container'>
    {makeButtons(channels)}
    </div>
  </div>
);

Pannel.propTypes = {
  channels: PropTypes.any.isRequired
}
export default Pannel


