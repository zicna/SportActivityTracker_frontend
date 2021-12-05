// * components
import Welcome from './Welcome'
import About from './About'
import UserForm from '../components/UserForm';
import UserInfo from '../components/UserInfo'

import { Route } from 'react-router-dom'

const Layout = () => {
    return(
        <div>
            <Route path='/welcome'>
                <Welcome />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/signin'>
                <UserForm />
            </Route>
            <Route path='/user-info/:userId'>
                <UserInfo />
            </Route>
        </div>

    )
}

export default Layout