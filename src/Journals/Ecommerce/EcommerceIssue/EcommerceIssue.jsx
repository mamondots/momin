import EcommerceArticles from "../../../Articles/EcommerceArticles/EcommerceArticles";

const EcommerceIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <EcommerceArticles></EcommerceArticles>
            </div>
        </div>

    );
};

export default EcommerceIssue;
