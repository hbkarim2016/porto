import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
const Socials = () => {
    return(
        <div className='socials flex-end'>
            <div className='socials_links'>
                <a className='flex-center' href='#/'><FontAwesomeIcon icon={faFacebookF} /></a>
                <a className='flex-center' href='#/'><FontAwesomeIcon icon={faTwitter} /></a>
                <a className='flex-center' href='#/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </div>
    )
}
export default Socials;