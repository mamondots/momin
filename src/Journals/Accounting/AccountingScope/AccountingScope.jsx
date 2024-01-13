import IjatArticles from "../../../Articles/IjatArticles/IjatArticles";

const AccountingScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>Accounting Theory,
                    Financial Accounting,
                    Managerial Accounting,
                    Accounting Principles,
                    Intermediate Financial Reporting,
                    Financial Statement Analysis,
                    Strategic Cost Management,
                    Differential Accounting,
                    Accounting Information Systems,
                    Auditing,
                    Government Accounting,
                    Accounting in Not-for-Profit Organizations,
                    Accounting Ethics,
                    Accounting Communications,
                    International Financial Reporting,
                    Forensic Accounting,
                    Accounting Research and Analysis,
                    Accounting for Mergers, Acquisitions and Complex Financial Structures,
                    Value Analysis,
                    Corporate Tax,
                    Individual Tax Accounting and Planning,
                    Taxes and Business Strategy,
                    Taxation Procedures for Estates, Trusts and Partnerships,
                    Taxation Procedures for C Corps and S Corps,
                    Payroll and Business Tax Accounting,</p>

            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <IjatArticles></IjatArticles>
                </div>
            </div>
        </div>
    );
};

export default AccountingScope;