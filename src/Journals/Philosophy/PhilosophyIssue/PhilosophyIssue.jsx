import PhilosophyArticles from "../../../Articles/PhilosophyArticles/PhilosophyArticles";

const PhilosophyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <PhilosophyArticles></PhilosophyArticles>
            </div>
        </div>

    );
};

export default PhilosophyIssue;
