import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ComputerScienceNav from "../Journals/ComputerScience/ComputerScienceNav/ComputerScienceNav";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const ComputerScienceLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Computer Science and Information Technology"}></PageTitle>
           
            
                <div className="flex px-20 my-8 gap-8">
                    <RoutingTop>
                    <ComputerScienceNav></ComputerScienceNav>
                    <Outlet></Outlet>
                    </RoutingTop>
                </div>
                
        </div>
    );
};

export default ComputerScienceLayout;