import EconomicsArticles from "../../../Articles/EconomicsArticles/EconomicsArticles";

const EconomicsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <EconomicsArticles></EconomicsArticles>
            </div>
        </div>

    );
};

export default EconomicsIssue;
