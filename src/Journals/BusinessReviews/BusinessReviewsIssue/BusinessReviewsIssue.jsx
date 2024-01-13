import BusinessReviewsArticles from "../../../Articles/BusinessReviewsArticles/BusinessReviewsArticles";


const BusinessReviewsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <BusinessReviewsArticles></BusinessReviewsArticles>
            </div>
        </div>

    );
};

export default BusinessReviewsIssue;
