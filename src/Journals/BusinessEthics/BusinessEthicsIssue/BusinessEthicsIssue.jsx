import BusinessEthicsArticles from "../../../Articles/BusinessEthicsArticles/BusinessEthicsArticles";




const BusinessEthicsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <BusinessEthicsArticles></BusinessEthicsArticles>
            </div>
        </div>

    );
};

export default BusinessEthicsIssue;
