import CriminalJusticeArticles from "../../../Articles/CriminalJusticeArticles/CriminalJusticeArticles";


const CriminalJusticeIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <CriminalJusticeArticles></CriminalJusticeArticles>
            </div>
        </div>

    );
};

export default CriminalJusticeIssue;
