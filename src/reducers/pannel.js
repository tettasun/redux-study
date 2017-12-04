const panels = (state = [], action) => {
  console.log("panel " + action.type + " channels " + action.channels);
  switch  (action.type){
    case 'DATA' :
      return Object.assign({}, state, {
        channels: action.channels
    })
    default:
      return state;
  }
}

export default panels;
