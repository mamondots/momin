import PublicPolicyArticles from "../../../Articles/PublicPolicyArticles/PublicPolicyArticles";


const PublicPolicyScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    Intersectoral Leadership, 
                    Economics for Policy, Planning, and Development, 
                    Statistical Foundations for Public Management and Policy, 
                    Public Administration and Society, 
                    Public Financial Management and Budgeting, 
                    Policy and Program Evaluation, 
                    Human Behavior in Public Organizations, 
                    Professional Practice of Public Administration, 
                    Urban Planning and Social Policy, 
                    Financial Management of Nonprofit Organizations, 
                    Strategic Planning in the Public Sector, 
                    Nonprofit Management and Leadership, 
                    Human Resources Management in Public and Non-Profit Organizations, 
                    Nonprofit Policy and Management, 
                    Political and Legal Environment of Public Administration, 
                    Program Evaluation and Performance Improvement, 
                    Public & Nonprofit Fiscal Administration, 
                    Leadership for Public and Nonprofit Organizations, 
                    Public Administration Capstone, 
                    Political Economy, 
                    Management, 
                    Comparative Public Administration, 
                    Human Rights and Administration, 
                    Development Theory, 
                    Poverty and Development Strategies, 
                    Population Studies, 
                    Decentralization, Governance and Development, 
                    Research Methods, 
                    Public Infrastructure Planning and Management, 
                    Policy Making and Analysis, 
                    Organizational Behavior in Public Sectors, 

                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <PublicPolicyArticles></PublicPolicyArticles>
                </div>
            </div>
        </div>
    );
};

export default PublicPolicyScope;