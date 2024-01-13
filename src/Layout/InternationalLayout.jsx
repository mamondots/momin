import { Outlet } from "react-router-dom";
import InternationalNav from "../Journals/International/InternationalNav/InternationalNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const InternationalLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Chemistry and Biochemistry"}></PageTitle>
            
            <RoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <InternationalNav></InternationalNav>
                    <Outlet></Outlet>
                </div>
                </RoutingTop>
        </div>
    );
};

export default InternationalLayout;