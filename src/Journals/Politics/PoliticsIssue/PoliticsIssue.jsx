import PoliticsArticles from "../../../Articles/PoliticsArticles/PoliticsArticles";

const PoliticsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Current Issue</h2>
            <div className="my-4">
                <PoliticsArticles></PoliticsArticles>
            </div>
        </div>

    );
};

export default PoliticsIssue;
