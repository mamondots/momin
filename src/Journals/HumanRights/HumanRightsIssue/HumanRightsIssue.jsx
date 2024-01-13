import HumanRightsArticles from "../../../Articles/HumanRightsArticles/HumanRightsArticles";


const HumanRightsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <HumanRightsArticles></HumanRightsArticles>
            </div>
        </div>

    );
};

export default HumanRightsIssue;
