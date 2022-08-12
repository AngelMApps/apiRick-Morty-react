import {Link} from 'react-router-dom';
import './Navbar.css';
const NavBar = ()=> {
    return (
        <nav className='navbar'>
            <h3 className='nav_title'>API R&M</h3>
            <ul className='nav_routes'>
                <li className='nav_routes__li'>
                    <Link to='/' >Home</Link>
                </li>
                <li className='nav_routes__li'>
                    <Link to='/search' >search</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
