import './Skills.css';
import Image from '../main_imgs/divider.jpg';
import Api from '../../../../Api/Api';
import { useEffect, useRef, useState } from 'react';

const Skills = () => {

    let countAosSkill = 0;

    let elementRef_1 = useRef(),
        elementRef_2 = useRef(),
        elementRef_3 = useRef(),
        elementRef = useRef();

    const [testValue, setTestValue] = useState(0);
    const [testValue2, setTestValue2] = useState(0);
    const [testValue3, setTestValue3] = useState(0);

    const [elementVal_1, setelementVal_1] = useState(0);
    const [elementVal_2, setelementVal_2] = useState(0);
    const [elementVal_3, setelementVal_3] = useState(0);
    const [elementVal_4, setelementVal_4] = useState(0);

    let elementRefs = [ elementRef_1, elementRef_2, elementRef_3 ];
    let elementValues = [ testValue, testValue2, testValue3 ];

    const elementValueChange = () => {
        if( elementRef.current !== undefined ){
            setelementVal_1(parseInt(elementRef_1.current.attributes[1].value));
            setelementVal_2(parseInt(elementRef_2.current.attributes[1].value));
            setelementVal_3(parseInt(elementRef_3.current.attributes[1].value));
        }
    }

    useEffect(()=>{
        elementValueChange()
    },[])

    window.addEventListener('scroll', () => {
        setelementVal_4(elementRef.current.getBoundingClientRect().top);
    })

    if(elementVal_4 <= 200){
        setTimeout(
            () => {
                if( testValue !== elementVal_1 ){
                    setTestValue(testValue + 1)
                }
                if( testValue2 !== elementVal_2 ){
                    setTestValue2(testValue2 + 1)
                }
                if( testValue3 !== elementVal_3 ){
                    setTestValue3(testValue3 + 1)
                }
            }
        , 10)
    }
    const SkillsData = Api().SkillsData;
        
    return(
        <section className="section">
            <div className="grid-2-cols">
                <div ref={elementRef} className="section-header">
                    <div className='section-header-desc'><h2 className='bg-header'>IDEAS</h2></div>
                    <span data-aos='fade-down' data-aos-delay='200'>CUSTOM SERVICES</span>
                    <h1 data-aos='fade-up' data-aos-delay='200'>Design. Build. Better.</h1>
                    <img className='header-line' alt='header-line' src={Image} />
                    <p data-aos='fade-left' data-aos-delay='300' className='header-description'>Discover how our unique process improves your building experience.</p>                        
                </div>
                <div className="skills-content">
                    <div className="section-header">
                        <span data-aos='fade-down' data-aos-delay='200'> OUR SKILLS</span>          
                    </div>
                    {
                        SkillsData.map( (el,indx) => {

                            countAosSkill = countAosSkill + 200;

                            return(
                                <div ref={elementRefs[indx]} className='skill-single' data-goal={el.skillValue}  key={indx}>
                                    <div className='skill-header'>
                                        <h5 data-aos='fade-down' data-aos-delay={countAosSkill}>{el.skillTitle}</h5>
                                        <div className='skill-value-num'>{elementValues[indx]}%</div> 
                                    </div>
                                    <div className='skill-body'>
                                        <span className='skill-value'></span>
                                        <span style={{width:elementValues[indx] + '%'}} className='skill-value bg-skill-value'></span>
                                    </div>
                                </div>
                            )
                            
                        })
                        
                    }
                </div>
            </div>
        </section>
    )
}
export default Skills;