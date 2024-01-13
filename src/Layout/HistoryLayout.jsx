import { Outlet } from "react-router-dom";
import HistoryNav from "../Journals/History/HistoryNav/HistoryNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const HistoryLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Review of History and Political Science"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <HistoryNav></HistoryNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default HistoryLayout;