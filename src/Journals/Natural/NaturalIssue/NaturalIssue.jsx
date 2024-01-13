
import NaturalArticles from "../../../Articles/NaturalArticles/NaturalArticles";

const NaturalIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <NaturalArticles></NaturalArticles>
            </div>
        </div>

    );
};

export default NaturalIssue;
