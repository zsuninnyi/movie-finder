import { createStore } from 'redux'
import { queryReducer } from './reducers'

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.()

export const createReduxStore = () => {
    const store = createStore(queryReducer, enableReduxDevTools)
    return store
}

export const initialState = {
    query: '',
}
