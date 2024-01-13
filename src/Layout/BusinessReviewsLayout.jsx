import { Outlet } from "react-router-dom";
import BusinessReviewsNav from "../Journals/BusinessReviews/BusinessReviewsNav/BusinessReviewsNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";



const BusinessReviewsLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Business Research Review"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <BusinessReviewsNav></BusinessReviewsNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default BusinessReviewsLayout;