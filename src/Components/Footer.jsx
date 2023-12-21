// imports


export default function Footer()
{
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="column">
                    <img src="/img/logo-white.png" className="footer-logo" alt="logo"/>
                    <p>We are a family owned Mediterraneran 
                        <br/>restaurant, focused on traditional recipes 
                        <br/>served with a modern twist.
                    </p>
                </div>
                <div className="column">
                    <h3>Important Links</h3>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/menu">Menu</a>
                        <a href="/reservation">Reservation</a> 
                    </nav>
                </div>
                <div className="column">
                    <h3>Contacts</h3>
                    <p>Address:
                        <br/>
                        <span>69 Street, Chicago</span>
                    </p>
                    <p>Phone:
                        <br/>
                        <span>123 456 789</span>
                    </p>
                    <p>Email:
                        <br/>
                        <span>little@lemon.com</span>
                    </p>
                </div>
                <div className="column">
                    <h3>Socials</h3>
                    <nav>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <img src="/img/fb.png" alt="facebook"/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <img src="/img/ig.png" alt="instagram"/>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <img src="/img/x.png" alt="twitter"/>
                        </a> 
                    </nav>
                </div>
            </div>
        </div>
    )
}