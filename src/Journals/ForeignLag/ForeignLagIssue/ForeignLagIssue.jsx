
import ForeignLagArticles from "../../../Articles/ForeignLagArticles/ForeignLagArticles";

const ForeignLagIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <ForeignLagArticles></ForeignLagArticles>
            </div>
        </div>

    );
};

export default ForeignLagIssue;
