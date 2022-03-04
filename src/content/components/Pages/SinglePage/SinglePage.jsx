// IMAGES
import Image_1 from '../../Home/main_imgs/blog-thumb-1.jpg';
import Image_2 from '../../Home/main_imgs/blog-thumb-2.jpg';
import Image_3 from '../../Home/main_imgs/blog-thumb-3.jpg';
import Image_4 from '../../Home/main_imgs/1-1.jpg';
import Image_5 from '../../Home/main_imgs/6.jpg';
// ===================================
// HOOKS
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// ===================================
// COMPONENTS
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
    let params = useParams();
    let blogs = Api().AllBlogs,
        services = Api().ServicesContent,
        font_awesome_icons = [faSwatchbook,faPaintRoller,faDrawPolygon,faSwatchbook],
        imgs = [
                    {img_1:Image_4, img_2:Image_5}, 
                    {img_1:Image_5, img_2:Image_4},
                    {img_1:Image_4, img_2:Image_5}, 
                    {img_1:Image_5, img_2:Image_4}
                ],
        images = [Image_1,Image_2,Image_3,Image_1];
    console.log(blogs)
    return(
        <>
            { params.blogsId > 0 ? 
                <section className="allBlogs">
                    <div className="page-header">
                        <div className='container'>
                            <div className="page-header-content">
                                <h1>{ blogs[params.blogsId - 1].blogTitle }</h1>
                                <h4>
                                    <Link target="_blank" to='/'>
                                        <span>Home</span>
                                    </Link> /
                                    <Link target="_blank" to='/blogs'>
                                        <span>Blogs</span>
                                    </Link> / 
                                    { params.blogsId }</h4>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="blogs-content grid-6-pages-cols">
                            <div className="blogs littleFullWidth grid-1-5-full">
                                <div className='blog-single'>
                                    <img src={images[params.blogsId - 1]}  alt='blog-img' />
                                    <div className='blog-data'>
                                        <span>{blogs[params.blogsId - 1].blogData} | BY {blogs[params.blogsId - 1].blogCreate}</span>
                                    </div>
                                    <div className='blog-title'>
                                        <h1>
                                            <Link target="_blank" to={`blogs/${params.blogsId}`}>
                                                <span>{blogs[params.blogsId - 1].blogTitle}</span>
                                            </Link>
                                        </h1>
                                    </div>
                                    <div className='blog-text'>
                                        <p>{blogs[params.blogsId - 1].blogBody}</p>
                                    </div>
                                    <div className='blog-text'>
                                        <p>{blogs[params.blogsId - 1].blogBody_2}</p>
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

            params.servicesId > 0 ? 

                <section className='allService-single'>
                    <div className="page-header">
                        <div className='container'>
                            <div className="page-header-content">
                                <h1>{ services[params.servicesId - 1].serviceHeader }</h1>
                                <h4>
                                    <Link target="_blank" to='/'>
                                        <span>Home</span>
                                    </Link> /
                                    <Link target="_blank" to='/services'>
                                        <span>Services</span>
                                    </Link> / 
                                    { params.servicesId }</h4>
                            </div>
                        </div>
                    </div>
                    <div className='allService-single-content container'>
                        <div className='allService'>
                            <div className='allService-single-side'>
                                <div className='allService-side-nav'>
                                    { services.map( (el,indx) => 
                                        <h3 key={indx}>
                                            <Link className={ params.servicesId - 1 === indx ? 'active' : '' } target="_blank" to={`/services/${ indx + 1 }`}>
                                                <span>{el.serviceHeader}</span>
                                            </Link>
                                        </h3>
                                    ) }
                                </div>
                            </div>
                            <div className='allService-single-header'>
                                <div className='section-header'>
                                    <p className='header-description'>{services[params.servicesId - 1].serviceContent} </p>
                                    <h1><FontAwesomeIcon icon={font_awesome_icons[params.servicesId - 1]} /></h1>
                                    <p className='description'>{services[params.servicesId - 1].serviceContent_2}</p>
                                </div>
                                <div className='allService-single-imgs'>
                                    <div className='single-img-1'>
                                        <img src={imgs[params.servicesId - 1].img_1} alt='service 1' />
                                    </div>
                                    <div className='single-img-2'>
                                        <img src={imgs[params.servicesId - 1].img_2} alt='service 2' />
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