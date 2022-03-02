import './Ads.css';
import logo_8 from '../main_imgs/logo-8.png';
import logo_9 from '../main_imgs/logo-9.png';
import logo_10 from '../main_imgs/logo-10.png';
import logo_11 from '../main_imgs/logo-11.png';
import logo_12 from '../main_imgs/logo-12.png';
import logo_13 from '../main_imgs/logo-13.png';
const Ads = () => {
    return(
        <div className="grid-6-cols Ads local-section">
            <div data-aos='fade-up' data-aos-delay="300" className="ads-logo-8">
                <img src={logo_8} alt='logo_8' />
            </div>
            <div data-aos='fade-up' data-aos-delay="500" className="ads-logo-9">
                <img src={logo_9} alt='logo_9' />
            </div>
            <div data-aos='fade-up' data-aos-delay="700" className="ads-logo-10">
                <img src={logo_10} alt='logo_10' />
            </div>
            <div data-aos='fade-up' data-aos-delay="900" className="ads-logo-11">
                <img src={logo_11} alt='logo_11' />
            </div>
            <div data-aos='fade-up' data-aos-delay="1100" className="ads-logo-12">
                <img src={logo_12} alt='logo_12' />
            </div>
            <div data-aos='fade-up' data-aos-delay="1300" className="ads-logo-13">
                <img src={logo_13} alt='logo_13' />
            </div>
        </div>
    )
}
export default Ads;