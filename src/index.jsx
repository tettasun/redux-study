import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combinedReducer from './reducers'
import App from './components/App'

import {updateData} from './actions'


let store = createStore(combinedReducer);
initializeData();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

function initializeData()
{
	//初期値をつけてる
	var dataObj = require('./resources/data.json');
	store.dispatch(updateData(dataObj['items']));
}

