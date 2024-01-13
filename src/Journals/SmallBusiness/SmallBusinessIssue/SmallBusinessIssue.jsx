import SmallBusinessArticle from "../../../Articles/SmallBusinessArticle/SmallBusinessArticle";

const SmallBusinessIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <SmallBusinessArticle></SmallBusinessArticle>
            </div>
        </div>

    );
};

export default SmallBusinessIssue;
