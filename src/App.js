// HOOKS
//import { useState } from "react";
import { useSelector } from "react-redux";
// ====================================================
// EXTENSIONS
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
// ====================================================
// PROJECT COMPONENTS
import Footer from "./content/components/Footer/Footer";
import Header from "./content/components/Header/Header";
import Home from "./content/components/Home/HomeSections/Home";
import OverPage from "./content/components/OverPages/OverPage";
import AllBlogs from "./content/components/Pages/Blogs/AllBlogs";
import Contact from "./content/components/Pages/Contact/Contact";
import NotFound from "./content/components/Pages/NotFound/NotFound";
import AllServices from "./content/components/Pages/Services/AllServices";
import SinglePage from "./content/components/Pages/SinglePage/SinglePage";
import Parameter from "./content/components/Parameter/Prameter";
import UpButton from "./content/components/UpButton/UpButton";
import About from "./content/components/Pages/About/About";
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

  let urls = [ '/', '/contact', '/blogs', '/services', '/blogs/:id','/services/:id', '/about' ], 
      allUrls = [ '', '/', '/contact', '/blogs', '/services','/about',
                  '/', 'contact', 'blogs',  'services',
                  'blogs/1', 'blogs/2', 'blogs/3', 'blogs/4',
                  'services/1', 'services/2', 'services/3', 'services/4',
                  'about'
                ],
      parameters = Parameter(),
      parameterFirst_ = parameters.parameterFirst.slice(0,parameters.parameterFirst.lastIndexOf('/')),
      parameterFirst__ = parameters.parameterFirst,
      parameterLast_ = parameters.parameterLast;

  return (
    <Router>
      <div>
        { overPageShow === 1 && <OverPage /> }
        <Header />
        <Switch>
        { ((allUrls.includes(parameterFirst_) )
          || (allUrls.includes(parameterLast_))
          || (allUrls.includes(parameterFirst__)))
          && (parameterFirst_ !== parameterFirst__ !== parameterLast_)
          ? 
            <>
              <Route exact path={urls[0]}>
                <Home />
              </Route>
              <Route path={urls[1]}>
                <Contact />
              </Route>
              <Route exact path={urls[2]}>
                <AllBlogs />
              </Route>
              <Route exact path={urls[3]}>
                <AllServices />
              </Route>
              <Route path={urls[4]}>
                <SinglePage />
              </Route>
              <Route path={urls[5]}>
                <SinglePage />
              </Route>
              <Route path={urls[6]}>
                <About />
              </Route>
            </>
          :
            <Route>
              <NotFound />
            </Route>
          }
        </Switch>
        <UpButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
