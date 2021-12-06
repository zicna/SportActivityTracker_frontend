import { setUser } from '../actions/UserActions'

const defState = {
    user: {},
    weights: [],
    trening_sessions: [],
    goal: {},
    weight_goal: {},
}

function userReducer(state=defState, action){
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.payload

            }
        default:
            return state
    }
}

export default userReducer