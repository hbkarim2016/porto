import Image from '../main_imgs/divider.jpg';
import './Questions.css';
import './Questions_responsive.css';
import Api from '../../../../Api/Api';

const Questions = () => {
    const QuestionsData = Api().QuestionsData;
    const checkQuestActive = e => {
        e.target.parentElement.classList.toggle('active');
    }
    let countValue = 0;
    return(
        <div className='grid-7-cols questions'>
            <div className="section-header">
                <div className='section-header-desc'><h2 className='bg-header'>QUESTIONS</h2></div>
                <span data-aos='fade-down' data-aos-delay='300'>COMMON QUESTIONS</span>
                <h1 data-aos='fade-up' data-aos-delay='300'>Frequent Questions</h1>
                <img src={Image} alt='header-line' className='header-line' />
                <p data-aos='fade-left' data-aos-delay='600' className='header-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</p>
                <p data-aos='fade-left' data-aos-delay='900' className='description'>Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus.</p>
                <button data-aos='fade-right' data-aos-delay='1100' className='btn btn-dark'>CONTACT US</button>
            </div>
            <div className='questions-content'>
                { QuestionsData.map( (el,indx) => {
                    countValue = countValue + 200;
                    return(
                        <div onClick={checkQuestActive} className={`question-single ${indx === 0 ? 'active' : ''}`} key={indx}>
                            <h5 data-aos='fade-right' data-aos-delay={countValue}>{el.questionText}</h5>
                            <div data-aos='fade-down' data-aos-delay={countValue} className={`question-answer`}><p>{el.questionAnswer}</p></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Questions;