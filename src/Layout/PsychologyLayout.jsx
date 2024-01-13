import { Outlet } from "react-router-dom";
import PsychologyNav from "../Journals/Psychology/PsychologyNav/PsychologyNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const PsychologyLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Journal of Psychology & Behavioral Science"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <PsychologyNav></PsychologyNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default PsychologyLayout;