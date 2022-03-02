
/* == DATA FROM JSON == */
import Api from '../../../../Api/Api';
/* == HOOKS == */
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
/* == REDUCERS == */
import { HideReducer, SliderShowReducer } from '../../../redux/reducers/mainSliderSlice';
import { ScrollLocationReducer, ScrollReducer } from '../../../redux/reducers/ScrollingSmooth';
/* == ------------ == */
/* == SLIDER STYLES == */
import './slider.css';
import './slider.responsive.css';
/* == FONT AWESOME == */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretLeft,faCaretRight} from '@fortawesome/free-solid-svg-icons';
/* == ------------ == */
const MainSlider = () => {
    
    const dispatch = useDispatch(); // DISPATCH
    const { direction, show, numSlider } = useSelector( state => state.mainSlider ); // SELECT STATE FROM STORE
    
    let Api_ = Api();
    let SliderData = Api_.SliderContent;
    
    // SLIDER HANDLE FUNCTION
    const handleSlider = (direct) =>{
        dispatch( HideReducer() );
        let countData = SliderData.length;
        setTimeout(()=>{
            dispatch( SliderShowReducer({ actionDirection:direct, countData:countData }) );
        },500)
    }

    // HANDLE GET START SCROLLING
    const handleGetStart = () => {
        dispatch( ScrollLocationReducer({url:'BetterSpace'}) );
        dispatch( ScrollReducer() );
    }

    return(
        <section id='main-slider-section' className="main-slider-section">
            <div className='slider-content content-container'>
                <div className='slider-btns'>
                    <div 
                        className='slider-prev' 
                        onClick={()=>handleSlider('left')}
                    >
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </div>
                    <div 
                        className='slider-next' 
                        onClick={()=>handleSlider('right')}
                    >
                        <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                </div>
                <div className={`slider-imgs ${direction}`}>
                    <div className='slider-img-1'></div>
                    <div className='slider-img-2'></div>
                </div>
                <div className='slider-text'>
                    <div className={ `slider-text-content ${direction + ' ' + show}` }>
                        <h3>{ SliderData[numSlider].sliderTitle }</h3>
                        <p>{ SliderData[numSlider].sliderDesc }</p>
                        <p>{ SliderData[numSlider].sliderText }</p>
                        <span className='slider-btn-border'></span>
                        <button onClick={handleGetStart} className='btn btn-light'>
                            { SliderData[numSlider].sliderBtn }
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MainSlider;