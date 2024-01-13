import { Outlet } from "react-router-dom";
import ForeignLagNav from "../Journals/ForeignLag/ForeignLagNav/ForeignLagNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";



const ForeignLagLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Foreign Languages, Cultures & Civilizations"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <ForeignLagNav></ForeignLagNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default ForeignLagLayout;