import CultureArticles from "../../../Articles/CultureArticles/CultureArticles";

const CultureIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <CultureArticles></CultureArticles>
            </div>
        </div>

    );
};

export default CultureIssue;
