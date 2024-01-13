import { Outlet } from "react-router-dom";
import ContemporaryGeneralNav from "../Journals/ContemporaryGeneral/ContemporaryGeneralNav/ContemporaryGeneralNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const ContemporaryGeneralLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"American International Journal of Contemporary Research"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <ContemporaryGeneralNav></ContemporaryGeneralNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default ContemporaryGeneralLayout;