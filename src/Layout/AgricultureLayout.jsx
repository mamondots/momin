import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import JaesNav from "../Journals/Agriculture/JaesNav/JaesNav";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";



const AgricultureLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Agriculture and Environmental Sciences    "}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <JaesNav></JaesNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default AgricultureLayout;