import { Outlet } from "react-router-dom";
import AccountingNav from "../Journals/Accounting/AccountingNav/AccountingNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";

import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";



const AccountingLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Accounting and Taxation"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <AccountingNav></AccountingNav>
                    <Outlet></Outlet>
                    </RoutingTop>





            </div>

        </div>
    );
};

export default AccountingLayout;