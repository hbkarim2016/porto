// STYLE
import './NotFound.css';
// =======================================================
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
// =======================================================
const NotFound = () => {
    return(
        <div className="notFound">
            <span data-aos='zoom-out' data-aos-delay='100'><FontAwesomeIcon icon={faBug} /></span>
            <h1 data-aos='zoom-out' data-aos-delay='100'>404</h1>
            <p data-aos='fade-up' data-aos-delay='300'>Not Found</p>
        </div>
    )
}
export default NotFound;