import { Outlet } from "react-router-dom";
import EconomicPolicyNav from "../Journals/EconomicPolicy/EconomicPolicyNav/EconomicPolicyNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const EconomicPolicyLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Business & Economic Policy"}></PageTitle>
            
            <div className="flex px-20 my-8 gap-8">
            <RoutingTop>
               <EconomicPolicyNav></EconomicPolicyNav>
                <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default EconomicPolicyLayout;