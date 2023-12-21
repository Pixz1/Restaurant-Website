// imports


export default function Home()
{
    return (
        <div className="home">
            <div className="top">
                <h1 className="main-heading">
                    A family owned&nbsp;  
                    <span className="focus-heading">Mediterranean</span>
                    &nbsp;restaurant in&nbsp; 
                    <span className="focus-heading">chicago</span>
                </h1>
            </div>
            <div className="bot">
                <div className="bot-title">
                    <h2>Featured</h2>
                </div>
                <div className="bot-content">
                    <div className="featured-container">
                        <img src="img/food1.jpg" alt="Featured1"/>
                        <h3 className="featured-heading">[New] Food Title</h3>
                        <p className="featured-date">16 Dec 2023</p>
                    </div>
                    <div className="featured-container">
                        <img src="img/food2.jpg" alt="Featured1"/>
                        <h3 className="featured-heading">[Exclusive] Food Title</h3>
                        <p className="featured-date">13 Dec 2023</p>
                    </div>
                    <div className="featured-container">
                        <img src="img/food3.jpg" alt="Featured1"/>
                        <h3 className="featured-heading">[New] Food Title</h3>
                        <p className="featured-date">10 Dec 2023</p>
                    </div>
                </div>                
            </div>
        </div>
    )
}