
import './BetterSpace.css';
import Image from '../main_imgs/divider.jpg';

const BetterSpace = () => {

    let goContact = () => {
        window.location.pathname = '';
        window.location.hash = '';
        window.location.pathname = 'contact';
    }
    return(
        <section id="BetterSpace" className="section-needSpaceBetter section container">
            <span className='empty-span'></span>
            <div className="needSpaceBetter grid-2-cols">
                <div className="needSpaceBetter-imgs">
                    <div data-aos='fade-down' className="needSpaceBetter-img-1"></div>
                    <div data-aos='fade-left' className="needSpaceBetter-img-2"></div>
                </div>
                <div className="needSpaceBetter-content">
                    <div className="section-header">
                        <div className='section-header-desc'><h2 className='bg-header'>YOUR PLACE</h2></div>
                        <span data-aos='fade-down'>WE'RE HERE TO HELP</span>
                        <h1 data-aos='fade-up'>You need space for better living.</h1>
                        <img className='header-line' alt='header-line' src={Image} />
                        <p data-aos='fade-up' className='header-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</p>
                        <p data-aos='fade-down' className='description'>Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus.</p>
                        <button data-aos='fade-right' onClick={goContact} className='btn btn-dark'>CONTACT US</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BetterSpace;