import { Outlet } from "react-router-dom";
import BiologyNav from "../Journals/Biology/BiologyNav/BiologyNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const BiologyLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"American International Journal of Biology"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <BiologyNav></BiologyNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default BiologyLayout;