import { Outlet } from "react-router-dom";
import NaturalNav from "../Journals/Natural/NaturalNav/NaturalNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import NaturalDetails from "../Journals/Natural/NaturalDetails/NaturalDetails";


const NaturalLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Natural Sciences"}></PageTitle>
            <NaturalDetails></NaturalDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <NaturalNav></NaturalNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default NaturalLayout;