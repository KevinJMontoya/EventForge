
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';
import { useContext } from 'react';
import {UserProvider} from '../context/UserContext.jsx';
import {UserContext} from '../context/UserContext.jsx';
//<Logo />

export default function OrganizerNavbar() {
    const { user } = useContext(UserContext); //Get user from context
    return (
        <nav className="navbar-container" style={{alignItems: 'center', marginBottom: 18 }}> 
            <div>
                </div>
                    <Link to="/">
                        <span className="navbar-logo">
                            <img className="logo-img" src="logo.png" alt="EventForge Logo"></img>
                        </span>
                </Link>
            <div>
                <h1 style={{ margin: 0 }}>Welcome, {user.firstName}</h1>
                <div style={{ color: '#ecdfdfff', fontSize: 14 }}>{user.organizationName}</div>

            </div>

            <ul style={{}}>
                <div className="navbar-links" style={{padding:8}}>
                    <li><Link to="/create-events" className='navbar-create-event-link'>Create Event</Link></li>
                    <li><Link to="/organizer-profile" className='navbar-organizer-profile-link'>Organizer Profile</Link></li>
                    <li><Link to="/account-settings" className='navbar-profile-link'>Acount</Link></li>
                    <li><Link to="/" className='navbar-sign-out-link'>Sign Out</Link></li>
                </div>
            </ul>
        </nav>
    )
}