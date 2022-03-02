// HOOKS
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ============================================
// DATA
import Api from "../../../../Api/Api";
// ============================================
// REDUCERS
import { FeedbackMoving } from "../../../redux/reducers/FeedbackSlice";
// ============================================
// STYLES
import './Feedback.css';
// ============================================


const Feedback = () => {

    const feedbackData = Api().feedbackData;
    const { feedbackPosition } = useSelector( state => state.FeedbackStore )
    const dispatch = useDispatch();
    
    const feedbackPositionChange = () => {
        let feedbackPositionValue = () => {
            dispatch( FeedbackMoving() )
        }
        setInterval(feedbackPositionValue,3000)
    } 
    useEffect( () => {
        try{
            feedbackPositionChange();
        }catch(err){
            console.log(err)
        }
    },[])

    return(
        <div data-aos='zoom-out' data-aos-delay='300' className="feedback">
            <div className='section-header'>
                <span data-aos='fade-down' data-aos-delay='600'>HAPPY CLIENTS</span>
                <h1 data-aos='fade-up' data-aos-delay='600'>See What Clients Are Saying</h1>
            </div>
            <div className={`feedback-content ${feedbackPosition}`}>
                { feedbackData.map( (el,indx) => {
                    return(
                            <div data-aos='fade-up' data-aos-delay='900' className='feedback-single' key={indx}>
                                <div className='feedback-coma'>"</div>
                                <p>{el.feedbackContent}</p>
                                <h5>{el.feedbackWriter}</h5>
                            </div>
                        )
                })}
            </div>
        </div>
    )

}
export default Feedback;