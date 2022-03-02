// STYLE
import './AllServices.css';
// ==========================================================
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSwatchbook,faPaintRoller,faDrawPolygon} from '@fortawesome/free-solid-svg-icons';
// ==========================================================
// LOCAL API
import Api from '../../../../Api/Api';
import TalkAbout from '../../Home/TalkAbout/TalkAbout';
import Questions from '../../Home/Questions/Questions';
import Skills from '../../Home/Skills/Skills';
// ==========================================================

const AllServices = () => {
    let services = Api().ServicesContent;
    let countValue = 0;
    const openService = indx => {
        let indxValue = indx + 1;
        window.location.pathname = 'services/'+indxValue;
    }
    return(
        <section className="allServices">
            <div className="page-header">
                <div className='container'>
                    <div className="page-header-content">
                        <h1>Services</h1>
                        <h4><a href="/">Home</a> / Services</h4>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="allServices-content">
                    <div className='section-header'>
                        <p data-aos='fade-left' data-aos-delay='100' className='header-description'>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Sed imperdiet libero id nisi euismod, 
                            sed porta est consectetur.
                        </p>
                        <p data-aos='fade-left' data-aos-delay='300' className='description'>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='allServices-content-links'>
                        <div className={`services-content`}>
                            {services.map((el,indx)=>{
                                countValue = countValue + 200;
                                return(
                                    <div data-aos='flip-down' data-aos-delay={countValue} onClick={() => openService(indx)} className={`single-service`} key={indx}>
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
                    </div>
                    <div>
                        <Skills />
                    </div>
                    <div className='talkAbout-content'>
                        <TalkAbout />
                    </div>
                    <div className='questions-content'>
                        <Questions />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AllServices;