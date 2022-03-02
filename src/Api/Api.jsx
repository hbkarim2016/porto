import Data from './ApiData.json';
const Api = () => {

    // MAIN SLIDER CONTENT
    let SliderContent = Data.SliderContent_;
    // =======================================
    // SERVICES CONTENT
    let ServicesContent = Data.ServicesContent;
    // =======================================
    // COMMENTS CONTENT
    let CommentsData = Data.CommentsData;
    // =======================================
    // SKILLS CONTENT
    let SkillsData = Data.SkillsData;
    // =======================================
    // QUESTIONS CONTENT
    let QuestionsData = Data.QuestionsData;
    // =======================================
    // FEEDBACK CONTENT
    let feedbackData = Data.feedbackTexts;
    // =======================================
    // ALL BLOGS
    let AllBlogs = Data.AllBlogs;
    // =======================================

    // RETURN VARIABLES OF DATA
    return {
        SliderContent, 
        ServicesContent, 
        CommentsData, 
        SkillsData, 
        QuestionsData, 
        feedbackData,
        AllBlogs
    };
}
export default Api;