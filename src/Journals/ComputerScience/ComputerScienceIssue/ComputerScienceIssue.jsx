import ComputerScienceArticles from "../../../Articles/ComputerScienceArticles/ComputerScienceArticles";




const ComputerScienceIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <ComputerScienceArticles></ComputerScienceArticles>
            </div>
        </div>

    );
};

export default ComputerScienceIssue;