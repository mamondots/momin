import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ArtHistoryNav from "../Journals/ArtHistory/ArtHistoryNav/ArtHistoryNav";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const ArtHistoryLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Art and Art History"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <ArtHistoryNav></ArtHistoryNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default ArtHistoryLayout;