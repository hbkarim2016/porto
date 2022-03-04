// COMPONENTS
import Socials from '../Header/Socials';
// =====================================
// LOGO
import Logo from '../Home/main_imgs/logo-1.png';
// =====================================
// STYLES
import './Footer.css';
// =====================================

function Footer(){
    return(
        <section className="footer">
            {/* FOOTER CONTENT */}
            <div className="footer-1 container grid-6-cols">
                <div>
                    <h3>Address</h3>
                    <ul>
                        <li data-aos='fade-down' data-aos-delay='100'>12345 Porto Blvd.</li>
                        <li data-aos='fade-down' data-aos-delay='200'>Suilte 1500</li>
                        <li data-aos='fade-down' data-aos-delay='300'>Los Angeles, California 90000</li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li data-aos='fade-down' data-aos-delay='100'>OFFICE</li>
                        <li data-aos='fade-down' data-aos-delay='200'>800-123-4568</li>
                    </ul>
                </div>
                <div>
                    <h3>Useful Links</h3>
                    <ul>
                        <li data-aos='fade-down' data-aos-delay='100'><a href='#/'>Our Services</a></li>
                        <li data-aos='fade-down' data-aos-delay='200'><a href='#/'>Payment Methods</a></li>
                        <li data-aos='fade-down' data-aos-delay='300'><a href='#/'>Services Guide</a></li>
                        <li data-aos='fade-down' data-aos-delay='400'><a href='#/'>FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li data-aos='fade-down' data-aos-delay='100'><a href='#/'>Design & Planning</a></li>
                        <li data-aos='fade-down' data-aos-delay='200'><a href='#/'>Interior Design</a></li>
                        <li data-aos='fade-down' data-aos-delay='300'><a href='#/'>Exterior Design</a></li>
                        <li data-aos='fade-down' data-aos-delay='400'><a href='#/'>Construction Drawings</a></li>
                    </ul>
                </div>
                <div>
                    <h3>About</h3>
                    <ul>
                        <li data-aos='fade-down' data-aos-delay='100'><a href='#/'>About Us</a></li>
                        <li data-aos='fade-down' data-aos-delay='200'><a href='#/'>Send a Message</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><Socials /></li>
                    </ul>
                </div>
            </div>
            {/* FOOTER COPYRIGHT */}
            <div className="footer-2 container">
                <div className='footer-logo'>
                    <img data-aos='zoom-in' data-aos-delay='1100' alt='logo' src={Logo} />
                </div>
                <div className='copyRight'>
                    <p>Porto Architecture 2. &copy; 2022. All Rights Reserved </p>
                </div>
            </div>

        </section>
    )
}
export default Footer;