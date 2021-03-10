import { combineReducers, createStore } from 'redux'
import reducerList from '../reducers/reducer-list'

let reducers = combineReducers({
    TodoList: reducerList,
})

let store = createStore(reducers)

export default store 