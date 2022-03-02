// REDUCERS
import { ScrollLocationReducer, ScrollReducer } from '../../redux/reducers/ScrollingSmooth';
// =======================================================
// HOOKS
import { useDispatch } from 'react-redux';
// =======================================================
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
// =======================================================

const UpButton = () => {
    const dispatch = useDispatch();

    const goToUp = () => {
        dispatch( ScrollLocationReducer({url:'main-slider-section'}) );
        dispatch( ScrollReducer() );
    }

    return(
        <div className={`up-btn`}>
            <button className="btn btn-dark" onClick={goToUp}><FontAwesomeIcon icon={faAngleUp} /></button>
        </div>
    )
}
export default UpButton;