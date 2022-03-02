import './Photo_single.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { overPageClose } from '../../../redux/reducers/overPageSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const PhotoSingle = () => {
    const dispatch = useDispatch();
    const { photo_num, photo_target } = useSelector( state => state.overPage );
    const closeOverPage = () => {
       dispatch( overPageClose() );
    } 
    return(
        <div className="photo-single">
            <div className='photo' id={photo_target}>
                <span className='close-icon' onClick={closeOverPage}>
                    <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
                </span>
                <span className='photo-count'>{photo_num} of 6</span>
            </div>
        </div>
    )
}
export default PhotoSingle;