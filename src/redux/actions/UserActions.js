const SET_USER = 'SET_USER'

export const setUser = () => {
    return (dispatch) =>{
        fetch('/users/1')
        .then(response => response.json())
        .then(user => dispatch({type: SET_USER, payload: user}))
    }
    
    
    // {type: SET_USER, payload: user}
}
