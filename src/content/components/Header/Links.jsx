// REDUCERS
import { overPageShow } from '../../redux/reducers/overPageSlice';
// =====================================================
/* HOOKS */
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// =====================================================
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faSearch} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
// =====================================================

const Links = () =>{
    
    const { navbarShow } = useSelector( state => state.navbar ); // SELECT NAVBAR STATE FROM STORE
    
    const dispatch = useDispatch(); // DISPATCH
    // TOGGLE OVERPAGE HANDLE
    const HandleSearchShow = () => {
        dispatch( overPageShow({content:'search'}) );
    }

    return(
        <div className={
            // TOGGLE MENU BY MOBILE BUTTON MENU
            navbarShow === 0 ? 'links flex-center links-mobile' 
                             : 'links flex-center links-mobile active'
        }>
            <ul className="flex-center">
                <li>
                    <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='/'>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='about'>
                        <span>About</span>
                    </NavLink>
                </li>
                <li className='services-menu-link'>
                    <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='services'>
                        <span>Services <FontAwesomeIcon icon={faAngleDown} /></span>
                    </NavLink>
                    <ul className='services-menu'>
                        <li>
                            <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='services'>
                                <span>Veiw All</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='services/1'>
                                <span>Design & Planning</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='services/2'>
                                <span>Interior Design</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='services/3'>
                                <span>Exterior Design</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='services/4'>
                                <span>Construction Drawings</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='blogs'>
                        <span>Blogs</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink target='_blank' className={( {isActive} ) => isActive ? 'active' : ''} to='contact'>
                        <span>Contact</span>
                    </NavLink>
                </li>                {/* SEARCH BUTTON */}
                <li onClick={HandleSearchShow}><a href='#/'><FontAwesomeIcon icon={faSearch} /></a></li>
            </ul>
        </div>
    );
}
export default Links;