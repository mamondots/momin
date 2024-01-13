import { Outlet } from "react-router-dom";
import BUTNav from "../Journals/BUT/BUTNav/BUTNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const BUTLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Business, Humanities and Technology"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <BUTNav></BUTNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default BUTLayout;