import { Outlet } from "react-router-dom";
import GenderNav from "../Journals/Gender/GenderNav/GenderNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const GenderLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Gender & Women's Studies"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <GenderNav></GenderNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default GenderLayout;