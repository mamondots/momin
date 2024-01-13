import { Outlet } from "react-router-dom";
import HumanitiesGeneralNav from "../Journals/HumanitiesGeneral/HumanitiesGeneralNav/HumanitiesGeneralNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const HumanitiesGeneralLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Humanities and Social Science"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <HumanitiesGeneralNav></HumanitiesGeneralNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default HumanitiesGeneralLayout;