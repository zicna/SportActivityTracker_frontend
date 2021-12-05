

const loggedIn = () => {
    if (!!localStorage.user_id ) {

        return true
    }else{
    debugger

        return false
    } 
}

export default loggedIn