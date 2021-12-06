const USER_ID = 'user_id'

export const login = (userData) => {
    localStorage.setItem(USER_ID, userData.id)
}

export const logout = () => {
    localStorage.removeItem(USER_ID)
}

export const isLogin = () => {
    localStorage.getItem(USER_ID) ? true : false
}