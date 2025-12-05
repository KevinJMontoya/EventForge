
import { Link } from 'react-router-dom';
import '../styling/Navbar.css'
import { useContext } from 'react';
import {UserContext} from '../context/UserContext.jsx';
import { useState } from 'react';
import logo from "../assets/logo.png"

export default function Navbar() {
    const { user, logout } = useContext(UserContext); //Get user from context
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar-container" style={{alignItems: 'center', marginBottom: 18 }}> 
            <div>
                </div>
                    <Link to="/">
                        <span className="navbar-logo">
                            <img className="logo-img" src={logo} alt="EventForge Logo"></img>
                        </span>
                </Link>
            <div>
                <h1 style={{ margin: 0 }}>Hello, {user?.email}</h1>
            </div>

            <ul style={{}}>
                <div className="navbar-links" style={{padding:8}}>
                    <li><Link to="/browse-events" className='navbar-browse-events-link'>Browse Events</Link></li>
                    <li><Link to="/shopping-cart" className='navbar-shopping-cart-link'>Shopping Cart</Link></li>
                    <li className="dropdown">
                        <button className="dropdown-toggle" onClick={() => setOpen(!open)}>
                            More ▾
                        </button>
                        {open && (
                            <div className="dropdown-menu">
                                <li><Link to="/account-settings">Account</Link></li>
                                <li><Link to="/guest-dashboard">Dashboard</Link></li>
                                <li><Link to="/">Sign Out</Link></li>
                            </div>
                        )}
                    </li>
                </div>
            </ul>
        </nav>
    )
}