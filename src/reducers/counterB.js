const counterB = (state = [], action) => {

  switch  (action.type){
    case 'ADD_COUNT_B':
      return Object.assign({}, state, {
        count: action.count
    })
    default:
      return state;
  }
}

export default counterB;
