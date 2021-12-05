export default function user(state={email:'',password: ''}, action){
    switch(action.type){
        case 'ADD_USER':
            return {

            }
        default:
            return state
    }
}