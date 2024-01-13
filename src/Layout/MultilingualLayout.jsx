import { Outlet } from "react-router-dom";
import MultilingualNav from "../Journals/Multilingual/MultilingualNav/MultilingualNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import MultilingualDetails from "../Journals/Multilingual/MultilingualDetails/MultilingualDetails";

const MultilingualLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Multilingual Journal of Contemporary Research"}></PageTitle>
            <MultilingualDetails></MultilingualDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <MultilingualNav></MultilingualNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default MultilingualLayout;