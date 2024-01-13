import { Outlet } from "react-router-dom";
import BusinessGeneralNav from "../Journals/BusinessGeneral/BusinessGeneralNav/BusinessGeneralNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const BusinessGeneralLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Business and Social Science"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <BusinessGeneralNav></BusinessGeneralNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default BusinessGeneralLayout;