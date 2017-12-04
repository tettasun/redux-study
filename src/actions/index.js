export const updateData = (channels) =>
{
  console.log("data呼ばれた" , channels);
  return {
    type: 'DATA',
    channels
  }
}

export const yclick = (thumb, link) => {
  return {
    type: 'Y_CLICK',
    thumb: thumb,
    link: link
  }
}
