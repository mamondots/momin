import { Outlet } from "react-router-dom";
import MusicNav from "../Journals/Music/MusicNav/MusicNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const MusicLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Music and Performing Arts"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <MusicNav></MusicNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default MusicLayout;