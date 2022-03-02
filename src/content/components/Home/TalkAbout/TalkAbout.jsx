import './TalkAbout.css';
import './TalkAbout_responsive.css';
const TalkAbout = () => {
    return(
        <div data-aos='flip-down' data-aos-delay='300' className="TalkAbout">
            <div className='section-header'>
                <span data-aos='fade-down' data-aos-delay='800'>WE'RE HERE TO HELP</span>
                <h2 data-aos='fade-left' data-aos-delay='1100'>Let's Talk About Your New Project, We Can Do It!</h2>
            </div>
            <button data-aos='fade-right' data-aos-delay='1100' className='btn btn-light'>CONTACT US</button>
        </div>
    )
}
export default TalkAbout;