import LinguisticsArticles from "../../../Articles/LinguisticsArticles/LinguisticsArticles";

const LinguisticsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <LinguisticsArticles></LinguisticsArticles>
            </div>
        </div>

    );
};

export default LinguisticsIssue;
