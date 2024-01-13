import { Outlet } from "react-router-dom";
import TechnologyNav from "../Journals/Technology/TechnologyNav/TechnologyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import TechnologyDetails from "../Journals/Technology/TechnologyDetails/TechnologyDetails";

const TechnologyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Applied Science and Technology"}></PageTitle>
            <TechnologyDetails></TechnologyDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <TechnologyNav></TechnologyNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default TechnologyLayout;