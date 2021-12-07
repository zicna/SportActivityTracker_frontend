import { NavLink } from 'react-router-dom'

const MainHeader = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            // activeClassName=
                            to="/">
                                Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            // activeClassName={} 
                            to="/signin">
                                Sign in
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            // activeClassName={} 
                            to="/dashboard">
                                Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            // activeClassName={} 
                            to="/userone">
                                User One
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader