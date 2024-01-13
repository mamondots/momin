import { Outlet } from "react-router-dom";
import IslamicNav from "../Journals/Islamic/IslamicNav/IslamicNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import IslamicDetails from "../Journals/Islamic/IslamicDetails/IslamicDetails";


const IslamicLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Islamic Banking and Finance"}></PageTitle>
            <IslamicDetails></IslamicDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <IslamicNav></IslamicNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default IslamicLayout;