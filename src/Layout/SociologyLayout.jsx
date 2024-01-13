import { Outlet } from "react-router-dom";
import SociologyNav from "../Journals/Sociology/SociologyNav/SociologyNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const SociologyLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Sociology and Social Work"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <SociologyNav></SociologyNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default SociologyLayout;