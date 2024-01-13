import { Outlet } from "react-router-dom";
import MathematicsNav from "../Journals/Mathematics/MathematicsNav/MathematicsNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import MathematicsDetails from "../Journals/Mathematics/MathematicsDetails/MathematicsDetails";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const MathematicsLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"American Review of Mathematics and Statistics"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <MathematicsNav></MathematicsNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default MathematicsLayout;