// REDUCERS
import { overPageShow } from '../../redux/reducers/overPageSlice';
// =====================================================
// LOCATION
import Parameter from '../Parameter/Prameter';
// =====================================================
/* HOOKS */
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// =====================================================
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faSearch} from '@fortawesome/free-solid-svg-icons';
// =====================================================

const Links = () =>{
    
    const { navbarShow } = useSelector( state => state.navbar ); // SELECT NAVBAR STATE FROM STORE
    
    const dispatch = useDispatch(); // DISPATCH
    // TOGGLE OVERPAGE HANDLE
    const HandleSearchShow = () => {
        dispatch( overPageShow({content:'search'}) );
    }

    let parameterFirst = Parameter().parameterFirst;

    return(
        <div className={
            // TOGGLE MENU BY MOBILE BUTTON MENU
            navbarShow === 0 ? 'links flex-center links-mobile' 
                             : 'links flex-center links-mobile active'
        }>
            <ul className="flex-center">
                <li><a className={ parameterFirst === '' ? 'active' : '' } href='/'>Home</a></li>
                <li><a className={ parameterFirst === 'about' ? 'active' : '' } href='/about'>About</a></li>
                <li className='services-menu-link'>
                    <a className={ parameterFirst === 'services' ? 'active' : '' } href='/services'>Services <FontAwesomeIcon icon={faAngleDown} /></a>
                    <ul className='services-menu'>
                        <li><a href='/services'>View All</a></li>
                        <li><a href='/services/1'>Design & Planning</a></li>
                        <li><a href='/services/2'>Interior Design</a></li>
                        <li><a href='/services/3'>Exterior Design</a></li>
                        <li><a href='/services/4'>Construction Drawings</a></li>
                    </ul>
                </li>
                <li><a className={ parameterFirst === 'blogs' ? 'active' : '' } href='/blogs'>Blogs</a></li>
                <li><a className={ parameterFirst === 'contact' ? 'active' : '' } href='/contact'>Contact</a></li>
                {/* SEARCH BUTTON */}
                <li onClick={HandleSearchShow}><a href='#/'><FontAwesomeIcon icon={faSearch} /></a></li>
            </ul>
        </div>
    );
}
export default Links;