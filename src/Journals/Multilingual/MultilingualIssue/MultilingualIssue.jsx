import MultilingualArticles from "../../../Articles/MultilingualArticles/MultilingualArticles";




const MultilingualIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <MultilingualArticles></MultilingualArticles>
            </div>
        </div>

    );
};

export default MultilingualIssue;
