import JeaArticles from "../../../Articles/JeaArticles/JeaArticles";


const JeaCurrentIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Current Issue</h2>
            <div className="my-4">
                <JeaArticles></JeaArticles>
            </div>
        </div>

    );
};

export default JeaCurrentIssue;