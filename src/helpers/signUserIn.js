const signUserIn = ({id}) => {
    localStorage.setItem('user_id', id)
}

export default signUserIn