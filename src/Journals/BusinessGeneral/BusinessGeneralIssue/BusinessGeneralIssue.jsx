import BusinessGeneralArticles from "../../../Articles/BusinessGeneralArticles/BusinessGeneralArticles";

const BusinessGeneralIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <BusinessGeneralArticles></BusinessGeneralArticles>
            </div>
        </div>

    );
};

export default BusinessGeneralIssue;
