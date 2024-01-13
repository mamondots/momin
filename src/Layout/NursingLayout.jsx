import { Outlet } from "react-router-dom";
import NursingNav from "../Journals/Nursing/NursingNav/NursingNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const NursingLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Nursing"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <NursingNav></NursingNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default NursingLayout;