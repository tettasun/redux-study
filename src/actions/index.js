export const data = (channels) =>
{
  console.log("data呼ばれた" + channels);
  return {
    type: 'DATA',
    channels: channels
  }
}

export const yclick = (thumb, link) => {
  return {
    type: 'Y_CLICK',
    thumb: thumb,
    link: link
  }
}
