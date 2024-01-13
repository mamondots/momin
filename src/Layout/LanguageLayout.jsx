import { Outlet } from "react-router-dom";
import LanguageNav from "../Journals/Language/LanguageNav/LanguageNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import LanguageDetails from "../Journals/Language/LanguageDetails/LanguageDetails";


const LanguageLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Language & Literature"}></PageTitle>
            <LanguageDetails></LanguageDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <LanguageNav></LanguageNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default LanguageLayout;