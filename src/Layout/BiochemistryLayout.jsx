import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import BiochemistryNav from "../Journals/Biochemistry/BiochemistryNav/BiochemistryNav";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const BiochemistryLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Chemistry and Biochemistry"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <BiochemistryNav></BiochemistryNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default BiochemistryLayout;