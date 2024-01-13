import { Outlet } from "react-router-dom";
import StrategicNav from "../Journals/Strategic/StrategicNav/StrategicNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import StrategicDetails from "../Journals/Strategic/StrategicDetails/StrategicDetails";


const StrategicLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Strategic Management Quarterly"}></PageTitle>
            <StrategicDetails></StrategicDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <StrategicNav></StrategicNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default StrategicLayout;