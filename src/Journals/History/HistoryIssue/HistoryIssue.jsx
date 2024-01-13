import HistoryArticles from "../../../Articles/HistoryArticles/HistoryArticles";


const HistoryIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <HistoryArticles></HistoryArticles>
            </div>
        </div>

    );
};

export default HistoryIssue;
