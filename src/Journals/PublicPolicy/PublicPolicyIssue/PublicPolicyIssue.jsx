import PublicPolicyArticles from "../../../Articles/PublicPolicyArticles/PublicPolicyArticles";

const PublicPolicyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Current Issue</h2>
            <div className="my-4">
                <PublicPolicyArticles></PublicPolicyArticles>
            </div>
        </div>

    );
};

export default PublicPolicyIssue;
