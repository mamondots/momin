import { Outlet } from "react-router-dom";
import CultureNav from "../Journals/Culture/CultureNav/CultureNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const CultureLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Islamic Studies and Culture"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <CultureNav></CultureNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default CultureLayout;