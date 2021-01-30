import { ACTIONS } from './actions'
import { initialState } from './store'

export const queryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_QUERY: {
            const { query } = action.payload
            return {
                ...state,
                query,
            }
        }
    }
}
