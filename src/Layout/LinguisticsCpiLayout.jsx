import { Outlet } from "react-router-dom";
import LinguisticsCpiNav from "../Journals/LinguisticsCpi/LinguisticsCpiNav/LinguisticsCpiNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import LinguisticsCpiDetails from "../Journals/LinguisticsCpi/LinguisticsCpiDetails/LinguisticsCpiDetails";

const LinguisticsCpiLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Language & Linguistics"}></PageTitle>
            <LinguisticsCpiDetails></LinguisticsCpiDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <LinguisticsCpiNav></LinguisticsCpiNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default LinguisticsCpiLayout;