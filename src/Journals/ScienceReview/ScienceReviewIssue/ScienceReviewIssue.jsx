import ScienceReviewArticles from "../../../Articles/ScienceReviewArticles/ScienceReviewArticles";


const ScienceReviewIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <ScienceReviewArticles></ScienceReviewArticles>
            </div>
        </div>

    );
};

export default ScienceReviewIssue;
