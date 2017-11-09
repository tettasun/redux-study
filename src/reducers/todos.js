const todos = (state = [], action) => {

	switch (action.type){
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
	case 'TOGGLE_TODO':
		return Object.assign({}, state, {
        completed: !state.completed
		})
	default:
		return state;
	}
}

export default todos;