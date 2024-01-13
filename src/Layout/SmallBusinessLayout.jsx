import { Outlet } from "react-router-dom";
import SmallBusinessNav from "../Journals/SmallBusiness/SmallBusinessNav/SmallBusinessNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const SmallBusinessLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Small Business and Entrepreneurship Development"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <SmallBusinessNav></SmallBusinessNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default SmallBusinessLayout;