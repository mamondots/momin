import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import BankManagementNav from "../Journals/BankManagement/BankManagementNav/BankManagementNav";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const BankManagementLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Finance and Bank Management"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <BankManagementNav></BankManagementNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default BankManagementLayout;