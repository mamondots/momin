import HealthArticles from "../../../Articles/HealthArticles/HealthArticles";

const HealthIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <HealthArticles></HealthArticles>
            </div>
        </div>

    );
};

export default HealthIssue;
