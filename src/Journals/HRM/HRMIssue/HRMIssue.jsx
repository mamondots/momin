import HRMArticles from "../../../Articles/HRMArticles/HRMArticles";

const HRMIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <HRMArticles></HRMArticles>
            </div>
        </div>

    );
};

export default HRMIssue;
