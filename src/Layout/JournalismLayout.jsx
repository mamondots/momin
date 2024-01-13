import { Outlet } from "react-router-dom";
import JournalismNav from "../Journals/Journalism/JournalismNav/JournalismNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import JournalismDetails from "../Journals/Journalism/JournalismDetails/JournalismDetails";


const JournalismLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Review of Journalism & Mass Communication"}></PageTitle>
            <JournalismDetails></JournalismDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <JournalismNav></JournalismNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default JournalismLayout;