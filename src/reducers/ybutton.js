const ybutton = (state = [], action) => {
  console.log("ybutton " + action.type + " link " + action.link);
  switch  (action.type){
    case 'Y_CLICK':
      return Object.assign({}, state, {
        thumb: action.thumb,
        link: action.link
    })
    default:
      return state;
  }
}

export default ybutton;
