import { Outlet } from "react-router-dom";
import PhysicsNav from "../Journals/Physics/PhysicsNav/PhysicsNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const PhysicsLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Physics and Astronomy"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <PhysicsNav></PhysicsNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default PhysicsLayout;