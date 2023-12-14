// imports


export default function Header()
{
    return (
        <div className="header">
            <div className="left-links">
                <a href="/">Home</a>
                <a href="#">Menu</a>
            </div>
            <div className="center-logo">
                <a href="/" id="logo">
                    <img src="/img/logo-small.jpg"/>
                </a>
            </div>
            <div className="right-links">
                <button className="reservation">
                    Reservation
                </button>
            </div>
        </div>
    )
}
