import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import CriminalJusticeNav from "../Journals/CriminalJustice/CriminalJusticeNav/CriminalJusticeNav";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const CriminalJusticeLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Law and Criminal Justice"}></PageTitle>
            <RoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <CriminalJusticeNav></CriminalJusticeNav>
                    <Outlet></Outlet>
                </div>
            </RoutingTop>
        </div>
    );
};

export default CriminalJusticeLayout;