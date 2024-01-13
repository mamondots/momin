import MarketingArticles from "../../../Articles/MarketingArticles/MarketingArticles";


const MarketingIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Current Issue</h2>
            <div className="my-4">
                <MarketingArticles></MarketingArticles>
            </div>
        </div>

    );
};

export default MarketingIssue;
