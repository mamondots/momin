import PsychologyArticles from "../../../Articles/PsychologyArticles/PsychologyArticles";

const PsychologyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <PsychologyArticles></PsychologyArticles>
            </div>
        </div>

    );
};

export default PsychologyIssue;
