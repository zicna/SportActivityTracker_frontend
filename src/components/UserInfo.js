import { useParams } from 'react-router-dom'



const UserInfo = () => {

    const params = useParams()

    console.log(params.userId)
    return(
        <section>
             <h1>User Info</h1>
             <p>{params.userId}</p>
        </section>
       
    )
}

export default UserInfo
