import { Outlet } from "react-router-dom";
import SocialNav from "../Journals/Social/SocialNav/SocialNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import SocialDetails from "../Journals/Social/SocialDetails/SocialDetails";


const SocialLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Social Science for Policy Implications"}></PageTitle>
            <SocialDetails></SocialDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <SocialNav></SocialNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default SocialLayout;