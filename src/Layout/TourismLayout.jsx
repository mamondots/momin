import { Outlet } from "react-router-dom";
import TourismNav from "../Journals/Tourism/TourismNav/TourismNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const TourismLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Tourism and Hospitality Management"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <TourismNav></TourismNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default TourismLayout;