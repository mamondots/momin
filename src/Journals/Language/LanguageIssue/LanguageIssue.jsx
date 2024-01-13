import LanguageArticles from "../../../Articles/LanguageArticles/LanguageArticles";


const LanguageIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <LanguageArticles></LanguageArticles>
            </div>
        </div>

    );
};

export default LanguageIssue;
