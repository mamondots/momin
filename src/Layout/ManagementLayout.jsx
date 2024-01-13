import { Outlet } from "react-router-dom";
import ManagementNav from "../Journals/Management/ManagementNav/ManagementNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const ManagementLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Management Policies and Practices"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <ManagementNav></ManagementNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default ManagementLayout;