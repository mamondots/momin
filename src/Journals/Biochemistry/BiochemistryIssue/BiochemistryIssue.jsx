import BiochemistryArticles from "../../../Articles/BiochemistryArticles/BiochemistryArticles";



const BiochemistryIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <BiochemistryArticles></BiochemistryArticles>
            </div>
        </div>

    );
};

export default BiochemistryIssue;
