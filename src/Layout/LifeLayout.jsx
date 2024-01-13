
import { Outlet } from "react-router-dom";
import LifeNav from "../Journals/Life/LifeNav/LifeNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const LifeLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Agriculture & Life Sciences"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <LifeNav></LifeNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default LifeLayout;