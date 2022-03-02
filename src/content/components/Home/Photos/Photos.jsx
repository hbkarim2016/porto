import { useDispatch } from 'react-redux';
import { overPageShow, photoTarget } from '../../../redux/reducers/overPageSlice';
import './Photos.css';
import './Photos_responsive.css';

const Photos = () => {
    
    const dispatch = useDispatch();

    const handlePhoto = e => {
        dispatch( overPageShow({content:'photo'}) );
        let photo_target = e.target.id;
        let photoNum = e.target.getAttribute('name');
        dispatch( photoTarget( {photo_target:photo_target, photoNum:photoNum } ) );
    }
    
    return(
        <div className="photos">
            <div className="grid-4-cols photos-col">
                <div onClick={handlePhoto} data-aos='fade-down' data-aos-delay='300' name='1' id='photo-grid-a' className="grid-1-3-full grid-1-2-mini photo-grid"></div>
                <div onClick={handlePhoto} data-aos='fade-left' data-aos-delay='500' name='2' id='photo-grid-b' className="grid-3-4-full grid-1-2-mini photo-grid"></div>
                <div onClick={handlePhoto} data-aos='fade-left' data-aos-delay='600' name='3' id='photo-grid-c' className="grid-4-5-full grid-1-2-mini photo-grid"></div>
                <div onClick={handlePhoto} data-aos='fade-right' data-aos-delay='500' name='4' id='photo-grid-d' className="grid-1-2-full grid-2-3-mini photo-grid"></div>
                <div onClick={handlePhoto} data-aos='fade-right' data-aos-delay='600' name='5' id='photo-grid-f' className="grid-2-3-full grid-2-3-mini photo-grid"></div>
                <div onClick={handlePhoto} data-aos='fade-up' data-aos-delay='300' name='6' id='photo-grid-h' className="grid-3-5-full grid-2-3-mini photo-grid"></div>
            </div>
        </div>
    )
}
export default Photos;