import StrategicArticles from "../../../Articles/StrategicArticles/StrategicArticles";

const StrategicIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <StrategicArticles></StrategicArticles>
            </div>
        </div>

    );
};

export default StrategicIssue;
