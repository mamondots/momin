import { Outlet } from "react-router-dom";
import ForeignNav from "../Journals/Foreign/ForeignNav/ForeignNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";



const ForeignLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of International Relations & Foreign Policy"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <ForeignNav></ForeignNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default ForeignLayout;