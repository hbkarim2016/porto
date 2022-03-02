import Ads from "../../Home/Ads/Ads";
import BetterSpace from "../../Home/BetterSpace/BetterSpace";
import Feedback from "../../Home/Feedback/Feedback";
import Photos from "../../Home/Photos/Photos";

const About = () => {

    return(
        <section className="about-content">
            <div className="page-header">
                <div className='container'>
                    <div className="page-header-content">
                        <h1>About</h1>
                        <h4><a href="/">Home</a> / About Us</h4>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="betterSpace-content">
                    <BetterSpace />
                </div>
                <div style={{ marginTop:'100px',marginBottom:'100px' }} className="photos-content">
                    <Photos />
                </div>
                <div style={{ marginTop:'100px',marginBottom:'100px' }} className="feedback-content">
                    <Feedback />
                </div>
                <div style={{ marginTop:'100px',marginBottom:'100px' }} className="ads-content">
                    <Ads />
                </div>
                <div style={{ marginTop:'100px',marginBottom:'100px' }} className="ads-content">
                    <div className="section-header">
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default About;