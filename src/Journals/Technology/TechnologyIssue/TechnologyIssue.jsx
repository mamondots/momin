
import TechnologyArticles from "../../../Articles/TechnologyArticles/TechnologyArticles";

const TechnologyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <TechnologyArticles></TechnologyArticles>
            </div>
        </div>

    );
};

export default TechnologyIssue;
