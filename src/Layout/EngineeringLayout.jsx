import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import JeaNav from "../Journals/Engineering/JeaNav/JeaNav";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";



const EngineeringLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Engineering and Architecture"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <JeaNav></JeaNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default EngineeringLayout;