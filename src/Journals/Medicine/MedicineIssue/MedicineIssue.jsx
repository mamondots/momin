import MedicineArticles from "../../../Articles/MedicineArticles/MedicineArticles";

const MedicineIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <MedicineArticles></MedicineArticles>
            </div>
        </div>

    );
};

export default MedicineIssue;
