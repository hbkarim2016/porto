// COMPONTENTS
import Links from './Links';
import Socials from './Socials';
// ============================================================
// HOOKS
import { useSelector, useDispatch } from 'react-redux';
// ============================================================
// REDUCERS
import { navbarReducer } from '../../redux/reducers/navbarSlice';
// ============================================================
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons';
// ============================================================
// LOGO 
import Logo from '../Home/main_imgs/logo-1.png';
// ============================================================
// STYLES
import './Header.css';
import './Header.responsive.css';
// ============================================================

const Header = () => {

    const { navbarShow } = useSelector( state => state.navbar ); // SELECT NAVBAR STATE FROM STORE
    const dispatch = useDispatch(); // DISPATCH
    
    // HANDLE NAVBAR RESPONSIVE
    const handleNavbar = () => {
        dispatch( navbarReducer() );
    }
    
    return(
        <div className='header'>
            {/* LOGO */}
            <div className='logo flex-start'>
                <a className='flex-start' href='/'><img src={Logo} alt='logo' /></a>
            </div> 
            {/* MENU BUTTON MOBILE */}
            <div className='menu-mobile flex-start' onClick={handleNavbar}>
                <FontAwesomeIcon icon={navbarShow !== 1 ? faBars : faTimes} />
            </div>
            {/* MENU CONTENT */}
            <Links />
            {/* SOCIALS */}
            <Socials />
        </div>
    )
}
export default Header;