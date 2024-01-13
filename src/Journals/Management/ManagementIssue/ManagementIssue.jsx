import ManagementArticles from "../../../Articles/ManagementArticles/ManagementArticles";


const ManagementIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Current Issue</h2>
            <div className="my-4">
                <ManagementArticles></ManagementArticles>
            </div>
        </div>

    );
};

export default ManagementIssue;
