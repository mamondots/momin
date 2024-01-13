
import LifeArticles from "../../../Articles/LifeArticles/LifeArticles";

const LifeIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <LifeArticles></LifeArticles>
            </div>
        </div>

    );
};

export default LifeIssue;
