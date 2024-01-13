import { Outlet } from "react-router-dom";
import EducationPolicyNav from "../Journals/EducationPolicy/EducationPolicyNav/EducationPolicyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import EducationPolicyDetails from "../Journals/EducationPolicy/EducationPolicyDetails/EducationPolicyDetails";

const EducationPolicyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Education & Social Policy"}></PageTitle>
            <EducationPolicyDetails></EducationPolicyDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <EducationPolicyNav></EducationPolicyNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default EducationPolicyLayout;