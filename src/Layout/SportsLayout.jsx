import { Outlet } from "react-router-dom";
import SportsNav from "../Journals/Sports/SportsNav/SportsNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const SportsLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Physical Education and Sports Management"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <SportsNav></SportsNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default SportsLayout;