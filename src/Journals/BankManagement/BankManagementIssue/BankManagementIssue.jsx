import BankManagementArticle from "../../../Articles/BankManagementArticle/BankManagementArticle";



const BankManagementIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <BankManagementArticle></BankManagementArticle>
            </div>
        </div>

    );
};

export default BankManagementIssue;
