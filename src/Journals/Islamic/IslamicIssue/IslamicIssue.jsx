import IslamicArticles from "../../../Articles/IslamicArticles/IslamicArticles";

const IslamicIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <IslamicArticles></IslamicArticles>
            </div>
        </div>

    );
};

export default IslamicIssue;
