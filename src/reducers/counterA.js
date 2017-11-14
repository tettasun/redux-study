const counterA = (state = [], action) => {
  console.log("counterAR " + action.type + " count " + action.count);
  switch  (action.type){
    case 'ADD_COUNT_A':
      return Object.assign({}, state, {
        count: action.count
    })
    default:
      return state;
  }
}

export default counterA;
