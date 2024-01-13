import { Outlet } from "react-router-dom";
import MarketingNav from "../Journals/Marketing/MarketingNav/MarketingNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const MarketingLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Marketing Management"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
               <MarketingNav></MarketingNav>
                <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default MarketingLayout;