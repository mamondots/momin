import BUTArticles from "../../../Articles/BUTArticles/BUTArticles";



const BUTIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <BUTArticles></BUTArticles>
            </div>
        </div>

    );
};

export default BUTIssue;
