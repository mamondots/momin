import { Outlet } from "react-router-dom";
import HRMNav from "../Journals/HRM/HRMNav/HRMNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const HRMNLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Human Resources Management and Labor Studies"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <HRMNav></HRMNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default HRMNLayout;