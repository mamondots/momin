import TourismArticles from "../../../Articles/TourismArticles/TourismArticles";


const TourismIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Current Issue</h2>
            <div className="my-4">
                <TourismArticles></TourismArticles>
            </div>
        </div>

    );
};

export default TourismIssue;
