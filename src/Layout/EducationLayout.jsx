import { Outlet } from "react-router-dom";
import EducationNav from "../Journals/Education/EducationNav/EducationNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const EducationLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Education and Human Development"}></PageTitle>
            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <EducationNav></EducationNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default EducationLayout;