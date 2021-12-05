import { NavLink } from 'react-router-dom'

const MainHeader = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            // activeClassName=
                            to="/welcome">
                                Welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            // activeClassName={} 
                            to="/about">
                                About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            // activeClassName={} 
                            to="/signin">
                                Sign In
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader