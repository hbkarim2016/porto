// COMPONENTS
import Ads from "../Ads/Ads";
import BetterSpace from "../BetterSpace/BetterSpace";
import Comments from "../Comments/Comments";
import Counter from "../Counter/Counter";
import MainSlider from "../MainSlider/MainSlider";
import Photos from "../Photos/Photos";
import Questions from "../Questions/Questions";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import TalkAbout from "../TalkAbout/TalkAbout";
import Feedback from "../Feedback/Feedback";
// ===========================================
// STYLES
import "./Home.css";
import Blogs from "../Blogs/Blogs";
// ===========================================

const Home = () => {

    return(
        <>
            {/* MAIN SLIDER SECTION */}
            <section className="section" id="main-slider-section">
                <MainSlider />
            </section>
            {/* ========================== */}
            {/* SERVICES SECTION */}
            <section className="sectionn services-section-style">
                <div className="bg-services"></div>
                <Services />
            </section>
            {/* ========================== */}
            {/* BETTER SPACE SECTION */}
            <section className="section">
                <BetterSpace />
            </section>
            {/* ========================== */}
            {/* Ads SECTION */}
            <section className="section">
                <div className="container">
                    <Ads />
                    <Comments />
                    <Skills />
                </div>
            </section>
            {/* ========================== */}
            {/* COUNTER SECTION */}
            <section className="section">
                <div className="container">
                    <Counter />
                </div>
            </section>
            {/* ========================== */}
            {/* PHOTO SECTION */}
            <section className="section">
                <div className="container">
                    <Photos />
                </div>
            </section>
            {/* ========================== */}
            {/* TALKABOUT SECTION */}
            <section className="section">
                <div className="container">
                    <TalkAbout />
                </div>
            </section>
            {/* ========================== */}
            {/* QUESTIONS SECTION */}
            <section className="section">
                <div className="container">
                    <Questions />
                </div>
            </section>
            {/* ========================== */}
            {/* FEEDBACK SECTION */}
            <section className="section">
                <div className="container">
                    <Feedback />
                </div>
            </section>
            {/* ========================== */}
            {/* BLOGS SECTION */}
            <section className="section">
                <div className="container">
                    <Blogs />
                </div>
            </section>
            {/* ========================== */}
        </>
    )

}
export default Home;