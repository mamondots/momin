import NursingArticles from "../../../Articles/NursingArticles/NursingArticles";

const NursingIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <NursingArticles></NursingArticles>
            </div>
        </div>

    );
};

export default NursingIssue;
