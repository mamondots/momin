import JournalismArticles from "../../../Articles/JournalismArticles/JournalismArticles";


const JournalismIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <JournalismArticles></JournalismArticles>
            </div>
        </div>

    );
};

export default JournalismIssue;
