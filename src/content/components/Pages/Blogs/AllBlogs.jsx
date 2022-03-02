// STYLE
import './AllBlogs.css';
// ==========================================================
// IMAGES
import Image_1 from '../../Home/main_imgs/blog-thumb-1.jpg';
import Image_2 from '../../Home/main_imgs/blog-thumb-2.jpg';
import Image_3 from '../../Home/main_imgs/blog-thumb-3.jpg';
// ==========================================================
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
// ==========================================================
// LOCAL API
import Api from '../../../../Api/Api';
import SideBlog from '../Sides/SideBlog';
// ==========================================================

const AllBlogs = () => {
    let images = [ Image_1, Image_2, Image_3, Image_1 ];
    let blogs = Api().AllBlogs;
    let countValue = 0;
    const goLocation = indx => {
        window.location.pathname = '';
        window.location.hash = '';
        window.location.pathname = `/blogs/${indx+1}`;
    }
    return(
        <section className="allBlogs">
            <div className="page-header">
                <div className='container'>
                    <div className="page-header-content">
                        <h1>Blogs</h1>
                        <h4><a href="/">Home</a> / Blogs</h4>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="blogs-content grid-6-pages-cols">
                    <div className="blogs littleFullWidth grid-1-5-full">
                        { blogs.map(( el, indx ) => {
                            countValue = countValue + 300;
                            return(
                                <div className='blog-single' key={indx}>
                                    <img data-aos='flip-down' data-aos-delay={countValue} src={images[indx]}  alt='blog-img' />
                                    <div className='blog-data'>
                                        <span data-aos='fade-down' data-aos-delay={countValue}>{el.blogData} | BY {el.blogCreate}</span>
                                    </div>
                                    <div className='blog-title'>
                                        <h1 data-aos='fade-up' data-aos-delay={countValue + 200}><a href={`/blogs/${indx + 1}`}>{el.blogTitle}</a></h1>
                                    </div>
                                    <div className='blog-text'>
                                        <p data-aos='fade-left' data-aos-delay={countValue + 200}>{el.blogBody_2}</p>
                                    </div>
                                    <div data-aos='fade-right' data-aos-delay={countValue + 400} className='blog-readMore'>
                                        <button 
                                            onClick={() => goLocation(indx)}><FontAwesomeIcon icon={faArrowRightToBracket}
                                        />
                                        </button>
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                    <div className='blog-side littleFullWidth grid-5-6-full'>
                        <SideBlog />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AllBlogs;