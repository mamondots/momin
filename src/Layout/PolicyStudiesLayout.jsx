import { Outlet } from "react-router-dom";
import PolicyStudiesNav from "../Journals/PolicyStudies/PolicyStudiesNav/PolicyStudiesNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const PolicyStudiesLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Administrative Sciences and Policy Studies"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <PolicyStudiesNav></PolicyStudiesNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default PolicyStudiesLayout;