import { Outlet } from "react-router-dom";
import HealthNav from "../Journals/Health/HealthNav/HealthNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const HealthLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Health Sciences"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <HealthNav></HealthNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default HealthLayout;