import { Outlet } from "react-router-dom";
import BusinessEthicsNav from "../Journals/BusinessEthics/BusinessEthicsNav/BusinessEthicsNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const BusinessEthicsLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Business Law and Ethics"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <BusinessEthicsNav></BusinessEthicsNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default BusinessEthicsLayout;