import HomeImage from '../images/Homepage2.png'
import Footer from './Footer';

function Homepage( { user } ) {
    return(
        <>
            <div className="container homepage-container">
                <div className="row justify-content-center ">
                
                    <img src={HomeImage} className="home-image" alt="landing page photo"/>
                
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Homepage;