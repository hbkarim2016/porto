// STYLE
import './Blogs.css';
// ==========================================================
// IMAGES
import Image from '../main_imgs/divider.jpg';
import Image_1 from '../main_imgs/blog-thumb-1.jpg';
import Image_2 from '../main_imgs/blog-thumb-2.jpg';
import Image_3 from '../main_imgs/blog-thumb-3.jpg';
// ==========================================================
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
// ==========================================================
// LOCAL API
import Api from '../../../../Api/Api';
// ==========================================================

const Blogs = () => {
    let blogImgs = [ Image_1, Image_2, Image_3 ];
    let allBlogs = Api().AllBlogs;
    let countValue = 0;
    const goLocation = indx => {
        window.location.pathname = '';
        window.location.hash = '';
        window.location.pathname = `/blogs/${indx+1}`;
    }
    return(
        <div className="section-blogs">
            <div className="blogs">
                <div className="section-header">
                    <div className='section-header-desc'>
                        <h2 className='bg-header'>WHAT'S HAPPENING</h2>
                    </div>
                    <span>OUR BLOG</span>
                    <h1>Recent News</h1>
                    <img className='header-line' alt='header-line' src={Image} />
                </div>
                <div className='blogs-content grid-3-cols'>
                    { allBlogs.map(( el, indx ) => {
                        countValue = countValue + 300;
                        if( indx === 3 ) {
                            return false
                        }else{
                            return(
                                <div className='blog-single' key={indx}>
                                    <img data-aos='fade-down' data-aos-delay={countValue} src={blogImgs[indx]}  alt='blog-img' />
                                    <div data-aos='fade-up' data-aos-delay={countValue + 200} className='blog-data'>
                                        <span>{el.blogData} | BY {el.blogCreate}</span>
                                    </div>
                                    <div data-aos='fade-up' data-aos-delay={countValue + 200} className='blog-title'>
                                        <h3><a href={`/blogs/${indx+1}`}>{el.blogTitle}</a></h3>
                                    </div>
                                    <div data-aos='fade-left' data-aos-delay={countValue + 200} className='blog-text'>
                                        <p>{el.blogBody_2}</p>
                                    </div>
                                    <div data-aos='fade-right' data-aos-delay={countValue + 400} className='blog-readMore'>
                                        <button onClick={() => goLocation(indx)}><FontAwesomeIcon icon={faArrowRightToBracket} /></button>
                                    </div>
                                </div>
                            )
                        }
                    }) }
                </div>
            </div>
        </div>
    )
}
export default Blogs;