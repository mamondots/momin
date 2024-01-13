import { Outlet } from "react-router-dom";
import PhilosophyNav from "../Journals/Philosophy/PhilosophyNav/PhilosophyNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const PhilosophyLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Philosophy and Theology"}></PageTitle>
            
            
                <div className="flex px-20 my-8 gap-8">
                    <RoutingTop>
                    <PhilosophyNav></PhilosophyNav>
                    <Outlet></Outlet>
                    </RoutingTop>
                </div>
                
        </div>
    );
};

export default PhilosophyLayout;