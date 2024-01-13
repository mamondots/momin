import { Outlet } from "react-router-dom";
import EcommerceNav from "../Journals/Ecommerce/EcommerceNav/EcommerceNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const EcommerceLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Management Information System & E-commerce"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <EcommerceNav></EcommerceNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default EcommerceLayout;