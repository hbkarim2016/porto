// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
// ============================================
// HOOKS
import { useDispatch, useSelector } from 'react-redux';
// ============================================
// REDUCERS
import { CommentChange } from '../../../redux/reducers/CommentsReducer';
// ============================================
// STYLES
import './Comments.css';
import './Comments_responsive.css';
// ============================================
// API DATA
import Api from '../../../../Api/Api';
// ============================================

const Comments = () => {
    const dispatch = useDispatch(),
          { commentsPosition } = useSelector( state => state.CommentStore );

    const handleComments = () => {
        dispatch( CommentChange() )
    }
    
    let CommentsData = Api().CommentsData;

    return(
        <section className="section-comments section">
            <div className="grid-3-cols comments">
                <div data-aos='fade-down' data-aos-delay='500' className="comments-img img-1"></div>
                    <div className="comment-single">
                        <div className={`comment-content-data ${commentsPosition}`}>
                        {
                            CommentsData.map( (el,indx) => {
                                return(
                                    <div className="comment-single-content" key={indx}>
                                        <div className='comment-header'>
                                            <span>{el.commentNum}</span>
                                            <h3 data-aos='fade-down'>{el.commentTitle}</h3>
                                        </div>
                                        <div data-aos='fade-left' data-aos-delay='300' className='comment-content'>
                                            <p>{el.commentText}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div onClick={handleComments} className='comment-btn'><FontAwesomeIcon icon={faAngleRight} /></div>
                    </div>
                <div data-aos='fade-up' data-aos-delay='500' className="comments-img img-2"></div>
            </div>
        </section>
    )
}
export default Comments;