import IjatArticles from "../../../Articles/IjatArticles/IjatArticles";

const PsychologyScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24 text-[15px]">
                <div className="space-y-2  text-[#0a2158e4]">
                    <p>Accounting Theory</p>
                    <p>Financial Accounting</p>
                    <p>Managerial Accounting</p>
                    <p>Accounting Principles</p>
                    <p>Intermediate Financial Reporting</p>
                    <p>Financial Statement Analysis</p>
                    <p>Strategic Cost Management</p>
                    <p>Differential Accounting</p>
                    <p>Accounting Information Systems</p>
                    <p>Auditing</p>
                    <p>Government Accounting</p>
                    <p>Accounting in Not-for-Profit Organizations</p>
                    <p>Accounting Ethics</p>
                    <p>Accounting Communications</p>
                </div>

                <div className="space-y-2 text-[#0a2158e4]">
                    <p>International Financial Reporting</p>
                    <p>Forensic Accounting</p>
                    <p>Accounting Research and Analysis</p>
                    <p>Accounting for Mergers</p>
                    <p>Financial Structures</p>
                    <p>Value Analysis</p>
                    <p>Corporate Tax</p>
                    <p>Individual Tax Accounting and Planning</p>
                    <p>Taxes and Business Strategy</p>
                    <p>Taxation Procedures for Estates</p>
                    <p>Taxation Procedures for C Corps and S Corps</p>
                    <p>Payroll and Business Tax Accounting</p>
                    <p>Acquisitions and Complex</p>
                    <p> Trusts and Partnerships</p>
                </div>
            </div>

            <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                    <div>
                         <IjatArticles></IjatArticles>
                    </div>
                </div>
        </div>
    );
};

export default PsychologyScope;