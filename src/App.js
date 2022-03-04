// HOOKS
import { useSelector } from "react-redux";
// ====================================================
// ROUTER DOM
import { Routes, Route } from "react-router-dom";
// ====================================================
// PROJECT COMPONENTS
// MAIN COMPONENTS
import Footer from "./content/components/Footer/Footer";
import Header from "./content/components/Header/Header";
import OverPage from "./content/components/OverPages/OverPage";
import UpButton from "./content/components/UpButton/UpButton";
// ---------------------
import Home from "./content/components/Home/HomeSections/Home";
import About from "./content/components/Pages/About/About";
import AllBlogs from "./content/components/Pages/Blogs/AllBlogs";
import AllServices from "./content/components/Pages/Services/AllServices";
import SinglePage from "./content/components/Pages/SinglePage/SinglePage";
import Contact from "./content/components/Pages/Contact/Contact";
import NotFound from "./content/components/Pages/NotFound/NotFound";
// ====================================================
// APP STYLES
import './GlobalStyles/GlobalAnimation.css';
import './GlobalStyles/GlobalStyleTheme.css';
import './GlobalStyles/ThemeResponsive.css';
// ====================================================
// AOS 
import Aos from 'aos';
import 'aos/dist/aos.css';
// ===========================================

function App() {

  /* SCROLL ANIMATION NPM PLUGIN */
  Aos.init({
      duration:500,
      delay:100
  })

  const {overPageShow} = useSelector( state => state.overPage ); // SELECT OVERPAGE STATE FROM STORE

  return (
      <div>
        { overPageShow === 1 && <OverPage /> }
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='services' element={<AllServices />} />
            <Route path='services/:servicesId' element={<SinglePage />} />
            <Route path='blogs' element={<AllBlogs />} />
            <Route path='blogs/:blogsId' element={<SinglePage />} />
            <Route path='contact' element={<Contact />} /> 
            <Route path='*' element={<NotFound />} /> 
        </Routes>
        <UpButton />
        <Footer />
      </div>
  );
}

export default App;
