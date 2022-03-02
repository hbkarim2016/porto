import Api from "../../../../Api/Api";
const SideBlog = () => {
    let blogs = Api().AllBlogs;
    let countValue = 300;
    return(
        <>
            <div className='blog-side-content'>
                <h3 data-aos='fade-down'>About The Blog</h3>
                <p data-aos='fade-down'>Lorem ipsum dolor sit amet, conse elit porta. Vestibulum ante justo, volutpat quis porta diam.</p>
            </div>
            <div className='blog-side-content'>
                <form>
                    <input data-aos='fade-down' data-aos-delay='100' type='text' placeholder='Search' />
                </form>
            </div>
            <div className='blog-side-content'>
                <h3 data-aos='fade-down' data-aos-delay='300'>Recent Posts</h3>
                <div className='blog-single'>
                    { blogs.map(( el, indx ) => {
                        countValue = countValue + 300;
                        return(
                            <div data-aos='fade-down' data-aos-delay={countValue + 200} className='blog-side-header' key={indx}>
                                <div className='blog-data'>
                                    <span>{el.blogData} | BY {el.blogCreate}</span>
                                </div>
                                <div className='blog-title'>
                                    <h1><a href={`/blogs/${indx + 1}`}>{el.blogTitle}</a></h1>
                                </div>
                            </div>
                        )
                }) }
                </div>
            </div>
        </>
    )
}
export default SideBlog;