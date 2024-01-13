import { Outlet } from "react-router-dom";
import LinguisticsNav from "../Journals/Linguistics/LinguisticsNav/LinguisticsNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const LinguisticsLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Linguistics & Communication"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <LinguisticsNav></LinguisticsNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default LinguisticsLayout;