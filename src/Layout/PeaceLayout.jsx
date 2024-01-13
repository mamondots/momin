import { Outlet } from "react-router-dom";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import PeaceNav from "../Journals/Peace/PeaceNav/PeaceNav";
import PeaceDetails from "../Journals/Peace/PeaceDetails/PeaceDetails";

const PeaceLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Global Peace and Conflict"}></PageTitle>
            <PeaceDetails></PeaceDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <PeaceNav></PeaceNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default PeaceLayout;