import { Outlet } from "react-router-dom";
import ContemporaryNav from "../Journals/Contemporary/ContemporaryNav/ContemporaryNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const ContemporaryLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Review of Contemporary Business Research"}></PageTitle>


            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <ContemporaryNav></ContemporaryNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default ContemporaryLayout;