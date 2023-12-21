// imports
import { Link } from 'react-router-dom';

export default function Header()
{
    return (
        <div className="header">
            <div className="left-links">
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
            </div>
            <div className="center-logo">
                <a href="/" id="logo">
                    <img src="/img/logo-small.jpg" alt='logo'/>
                </a>
            </div>
            <div className="right-links">
                <Link to="/reservation" className='reservation-link'>
                    Reservation
                </Link>
            </div>
        </div>
    )
}
