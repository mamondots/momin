import { Outlet } from "react-router-dom";
import SocialGeneralNav from "../Journals/SocialGeneral/SocialGeneralNav/SocialGeneralNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import SocialGeneralDetails from "../Journals/SocialGeneral/SocialGeneralDetails/SocialGeneralDetails";

const SocialGeneralLayout = () => {
    return (
        <div className="">
            <PageTitle title={"American International Journal of Social Science"}></PageTitle>
            <SocialGeneralDetails></SocialGeneralDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <SocialGeneralNav></SocialGeneralNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default SocialGeneralLayout;