// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSwatchbook,faPaintRoller,faDrawPolygon} from '@fortawesome/free-solid-svg-icons';
// =======================================================
// HOOKS
import { useDispatch, useSelector } from 'react-redux';
// =======================================================
// SERVICES STYLES
import './Services.css';
import './Services_responsive.css';
// =======================================================
// FETCH SERVICES DATA
import Api from '../../../../Api/Api';
import {positionReducer} from '../../../redux/reducers/ServicesSlice';
// =======================================================

const Services = () => {

    const { position } = useSelector( state => state.Services );

    const dispatch = useDispatch();

    const handlePosition = e =>{
        
        let circleId = e.target.id,
            childrenObj = e.target.parentElement.children;

        Object
            .keys(childrenObj)
            .map( el => 
                childrenObj[el].classList.remove('active')
            );
        e.target.classList.add('active'); 
        
        dispatch(positionReducer({name:circleId}));
    }


    let servicesDate = Api().ServicesContent;

    let countAos = 0;

    return(
        <section className="container services-content">
            <div className={`grid-3-cols services service-${position}`}>
                {servicesDate.map((el,indx)=>{
                    countAos = countAos + 300;
                    return(
                        <div data-aos='fade-down' data-aos-delay={countAos} className={`single-service`} key={indx}>
                            <div className='service-icon'>
                                <FontAwesomeIcon 
                                    icon={ 
                                        el.serviceIcon === 'faSwatchbook' ? faSwatchbook
                                        : el.serviceIcon === 'faPaintRoller' ? faPaintRoller
                                        : el.serviceIcon === 'faDrawPolygon' ? faDrawPolygon
                                        : false
                                    } />
                            </div>
                            <div className='service-header'><h2>{el.serviceHeader}</h2></div>
                            <div className='service-content'>
                                <p>{el.serviceContent}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='circles-slider flex-center'>
                <span 
                    className='circle-slider active' 
                    id='1st'
                    onClick={handlePosition}
                >
                </span>
                <span 
                    className='circle-slider' 
                    id='2nd'
                    onClick={handlePosition}
                >
                </span>
                <span 
                    className='circle-slider' 
                    id='3th'
                    onClick={handlePosition}
                >
                </span>
                <span 
                    className='circle-slider' 
                    id='4fr'
                    onClick={handlePosition}
                >
                </span>
            </div>
        </section>
    )
}

export default Services;