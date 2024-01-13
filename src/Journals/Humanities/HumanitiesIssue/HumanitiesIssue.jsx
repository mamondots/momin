import HumanitiesArticles from "../../../Articles/HumanitiesArticles/HumanitiesArticles";


const HumanitiesIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <HumanitiesArticles></HumanitiesArticles>
            </div>
        </div>

    );
};

export default HumanitiesIssue;
