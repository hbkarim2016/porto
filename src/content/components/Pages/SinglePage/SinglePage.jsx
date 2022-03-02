// IMAGES
import Image_1 from '../../Home/main_imgs/blog-thumb-1.jpg';
import Image_2 from '../../Home/main_imgs/blog-thumb-2.jpg';
import Image_3 from '../../Home/main_imgs/blog-thumb-3.jpg';
import Image_4 from '../../Home/main_imgs/1-1.jpg';
import Image_5 from '../../Home/main_imgs/6.jpg';
// ===================================
// COMPONENTS
import Parameter from "../../Parameter/Prameter";
import Api from "../../../../Api/Api";
import SideBlog from '../Sides/SideBlog';
import NotFound from '../NotFound/NotFound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSwatchbook,faPaintRoller,faDrawPolygon} from '@fortawesome/free-solid-svg-icons';
// ===================================
// STYLES
import './SinglePage.css';
import './SinglePage_responsive.css';
import TalkAbout from '../../Home/TalkAbout/TalkAbout';
// ===================================
const SinglePage = () => {
    let parametersValue = Parameter(),
        parameterFirst = parametersValue.parameterFirst.slice(0,parametersValue.parameterFirst.lastIndexOf('/')),
        parameterId = parametersValue.parameterLast,
        blogs = Api().AllBlogs,
        services = Api().ServicesContent,
        font_awesome_icons = [faSwatchbook,faPaintRoller,faDrawPolygon,faSwatchbook],
        imgs = [
                    {img_1:Image_4, img_2:Image_5}, 
                    {img_1:Image_5, img_2:Image_4},
                    {img_1:Image_4, img_2:Image_5}, 
                    {img_1:Image_5, img_2:Image_4}
                ],
        images = [Image_1,Image_2,Image_3,Image_1];

    console.log(parameterFirst)

    return(
        <>
            { parameterFirst === 'blogs' ? 
                <section className="allBlogs">
                    <div className="page-header">
                        <div className='container'>
                            <div className="page-header-content">
                                <h1>{ blogs[parameterId - 1].blogTitle }</h1>
                                <h4><a href="/">Home</a> / <a href="/blogs">Blogs</a> / { parameterId }</h4>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="blogs-content grid-6-pages-cols">
                            <div className="blogs littleFullWidth grid-1-5-full">
                                <div className='blog-single'>
                                    <img src={images[parameterId - 1]}  alt='blog-img' />
                                    <div className='blog-data'>
                                        <span>{blogs[parameterId - 1].blogData} | BY {blogs[parameterId - 1].blogCreate}</span>
                                    </div>
                                    <div className='blog-title'>
                                        <h1><a href={`/blogs/${parameterId}`}>{blogs[parameterId - 1].blogTitle}</a></h1>
                                    </div>
                                    <div className='blog-text'>
                                        <p>{blogs[parameterId - 1].blogBody}</p>
                                    </div>
                                    <div className='blog-text'>
                                        <p>{blogs[parameterId - 1].blogBody_2}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='blog-side littleFullWidth grid-5-6-full'>
                                <SideBlog />
                            </div>
                        </div>
                    </div>
                </section>
            :

            parameterFirst === 'services' ? 

                <section className='allService-single'>
                    <div className="page-header">
                        <div className='container'>
                            <div className="page-header-content">
                                <h1>{ services[parameterId - 1].serviceHeader }</h1>
                                <h4><a href="/">Home</a> / <a href="/services">Services</a> / { parameterId }</h4>
                            </div>
                        </div>
                    </div>
                    <div className='allService-single-content container'>
                        <div className='allService'>
                            <div className='allService-single-side'>
                                <div className='allService-side-nav'>
                                    { services.map( (el,indx) => 
                                        <h3 key={indx}>
                                            <a 
                                                className={ parameterId - 1 === indx ? 'active' : '' } 
                                                href={`/services/${ indx + 1 }`}
                                            >
                                                {el.serviceHeader}
                                            </a>
                                        </h3>
                                    ) }
                                </div>
                            </div>
                            <div className='allService-single-header'>
                                <div className='section-header'>
                                    <p className='header-description'>{services[parameterId - 1].serviceContent} </p>
                                    <h1><FontAwesomeIcon icon={font_awesome_icons[parameterId - 1]} /></h1>
                                    <p className='description'>{services[parameterId - 1].serviceContent_2}</p>
                                </div>
                                <div className='allService-single-imgs'>
                                    <div className='single-img-1'>
                                        <img src={imgs[parameterId - 1].img_1} alt='service 1' />
                                    </div>
                                    <div className='single-img-2'>
                                        <img src={imgs[parameterId - 1].img_2} alt='service 2' />
                                    </div>
                                </div>
                            </div>
                            <div className='allService-single-talkAbout'>
                                <TalkAbout />
                            </div>
                        </div>
                    </div>
                </section>

            :

                <NotFound />

            }
        </>
    )
}
export default SinglePage;