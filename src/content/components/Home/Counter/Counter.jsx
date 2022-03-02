import { useEffect, useRef, useState } from 'react';
import './Counter.css';
const Counter = () => {

    const [elementVal_1, setelementVal_1] = useState(0);
    const [elementVal_2, setelementVal_2] = useState(0);
    const [elementVal_3, setelementVal_3] = useState(0);
    const [elementVal_4, setelementVal_4] = useState(0);
    const [elementVal_5, setelementVal_5] = useState(0);

    const [testValue, setTestValue] = useState(0);
    const [testValue2, setTestValue2] = useState(0);
    const [testValue3, setTestValue3] = useState(0);
    const [testValue4, setTestValue4] = useState(0);

    let elementRef_1 = useRef(),
        elementRef_2 = useRef(),
        elementRef_3 = useRef(),
        elementRef_4 = useRef(),
        elementRef = useRef();

    const elmentScrollValue = () => {
        if( elementRef.current !== undefined ){
            setelementVal_1(parseInt(elementRef_1.current.attributes[0].value));
            setelementVal_2(parseInt(elementRef_2.current.attributes[0].value));
            setelementVal_3(parseInt(elementRef_3.current.attributes[0].value));
            setelementVal_4(parseInt(elementRef_4.current.attributes[0].value));
        }
    }

    useEffect( () => {
        elmentScrollValue()
    }, [])

    window.addEventListener('scroll', () => {
        setelementVal_5(elementRef.current.getBoundingClientRect().top);
    })

    if( elementVal_5 <= 200 ){
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
                if( testValue4 !== elementVal_4 ){
                    setTestValue4(testValue4 + 1)
                }
            }
        , 10)
    }

    return(
        <div ref={elementRef} className="grid-4-cols counter">
            <div className="grid-counter"><h1 ref={elementRef_1} value={15}>{testValue}+</h1><p data-aos='fade-up' data-aos-delay='300'>YEARS OF EXPERIENCE</p></div>
            <div className="grid-counter"><h1 ref={elementRef_2} value={350}>{testValue2}+</h1><p data-aos='fade-up' data-aos-delay='500'>SATISFIED CLIENTS</p></div>
            <div className="grid-counter"><h1 ref={elementRef_3} value={20}>{testValue3}+</h1><p data-aos='fade-up' data-aos-delay='700'>TEAM MEMBERS</p></div>
            <div className="grid-counter"><h1 ref={elementRef_4} value={45}>{testValue4}+</h1><p data-aos='fade-up' data-aos-delay='900'>AWARDS WINNING</p></div>
        </div>
    )
}
export default Counter;