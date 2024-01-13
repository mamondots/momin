import { Outlet } from "react-router-dom";
import HumanRightsNav from "../Journals/HumanRights/HumanRightsNav/HumanRightsNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const HumanRightsLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Social Welfare and Human Rights"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <HumanRightsNav></HumanRightsNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default HumanRightsLayout;