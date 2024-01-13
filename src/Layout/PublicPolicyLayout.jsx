import { Outlet } from "react-router-dom";
import PublicPolicyNav from "../Journals/PublicPolicy/PublicPolicyNav/PublicPolicyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import PublicPolicyDetails from "../Journals/PublicPolicy/PublicPolicyDetails/PublicPolicyDetails";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const PublicPolicyLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"Public Policy and Administration Review"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <PublicPolicyNav></PublicPolicyNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default PublicPolicyLayout;