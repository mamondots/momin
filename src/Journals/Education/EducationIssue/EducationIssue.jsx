import EducationArticles from "../../../Articles/EducationArticles/EducationArticles";

const EducationIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <EducationArticles></EducationArticles>
            </div>
        </div>

    );
};

export default EducationIssue;
