const USER_ID = 'user_id'

export const login = (userData) => {
    localStorage.setItem(USER_ID, userData.id)
}

export const logout = () => {
    localStorage.removeItem(USER_ID)
}

export const isLogin = () => {
    if(localStorage.getItem(USER_ID)){
        return true
    }else {
        return false
    }
}

// !this might not be needed for final project
export const userId = () => {
    return localStorage.getItem(USER_ID)
}