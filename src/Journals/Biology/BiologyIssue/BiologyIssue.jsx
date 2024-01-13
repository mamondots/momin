import BiologyArticles from "../../../Articles/BiologyArticles/BiologyArticles";

const BiologyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <BiologyArticles></BiologyArticles>
            </div>
        </div>

    );
};

export default BiologyIssue;
