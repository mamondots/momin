import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import EconomicsNav from "../Journals/Economics/EconomicsNav/EconomicsNav";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const EconomicsLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Economics and Development Studies"}></PageTitle>

            <RoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <EconomicsNav></EconomicsNav>
                    <Outlet></Outlet>
                </div>
            </RoutingTop>
        </div>
    );
};

export default EconomicsLayout;