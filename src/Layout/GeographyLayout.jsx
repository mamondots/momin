import { Outlet } from "react-router-dom";
import GeographyNav from "../Journals/Geography/GeographyNav/GeographyNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const GeographyLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Geography and Earth Sciences"}></PageTitle>
            <RoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <GeographyNav></GeographyNav>
                    <Outlet></Outlet>
                </div>
            </RoutingTop>
        </div>
    );
};

export default GeographyLayout;