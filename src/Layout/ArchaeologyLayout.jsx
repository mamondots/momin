import { Outlet } from "react-router-dom";
import ArchaeologyNav from "../Journals/Archaeology/ArchaeologyNav/ArchaeologyNav";

import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";




const ArchaeologyLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Anthropology and Archaeology"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <ArchaeologyNav></ArchaeologyNav>
                    <Outlet></Outlet>
                </RoutingTop>


            </div>

        </div>
    );
};

export default ArchaeologyLayout;