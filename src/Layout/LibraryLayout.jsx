import { Outlet } from "react-router-dom";
import LibraryNav from "../Journals/Library/LibraryNav/LibraryNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import LibraryDetails from "../Journals/Library/LibraryDetails/LibraryDetails";

const LibraryLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Library and Information Sciences"}></PageTitle>
            <LibraryDetails></LibraryDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <LibraryNav></LibraryNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default LibraryLayout;