import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import CenterNav from "../CenterInformation/CenterNav/CenterNav";
import CenterDetails from "../CenterInformation/CenterDetails/CenterDetails";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const CenterLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Information"}></PageTitle>
            <CenterDetails></CenterDetails>
            <RoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <CenterNav></CenterNav>
                    <Outlet></Outlet>
                </div>
            </RoutingTop>

        </div>
    );
};

export default CenterLayout;