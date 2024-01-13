import { Outlet } from "react-router-dom";
import ScienceReviewNav from "../Journals/ScienceReview/ScienceReviewNav/ScienceReviewNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ScienceReviewDetaisl from "../Journals/ScienceReview/ScienceReviewDetaisl/ScienceReviewDetaisl";

const ScienceReviewLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Social Science Review"}></PageTitle>
            <ScienceReviewDetaisl></ScienceReviewDetaisl>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <ScienceReviewNav></ScienceReviewNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default ScienceReviewLayout;