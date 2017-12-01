const ybutton = (state = [], action) => {
  console.log("ybutton " + action.type + " id " + action.id);
  switch  (action.type){
    case 'Y_CLICK':
      return Object.assign({}, state, {
        id: action.id
    })
    default:
      return state;
  }
}

export default ybutton;
