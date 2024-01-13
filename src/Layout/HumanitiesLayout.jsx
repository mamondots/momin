import { Outlet } from "react-router-dom";
import HumanitiesNav from "../Journals/Humanities/HumanitiesNav/HumanitiesNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const HumanitiesLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Review of Arts and Humanities"}></PageTitle>
            
            <RoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <HumanitiesNav></HumanitiesNav>
                    <Outlet></Outlet>
                </div>
                </RoutingTop> 
        </div>
    );
};

export default HumanitiesLayout;