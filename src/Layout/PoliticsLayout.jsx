import { Outlet } from "react-router-dom";
import PoliticsNav from "../Journals/Politics/PoliticsNav/PoliticsNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const PoliticsLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Power, Politics & Governance"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <PoliticsNav></PoliticsNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default PoliticsLayout;