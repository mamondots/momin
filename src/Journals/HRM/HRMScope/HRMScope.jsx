import HRMArticles from "../../../Articles/HRMArticles/HRMArticles";

const HRMScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    Industrial Relations, 
                    Strategic Human Resource Management, 
                    Labor Law, 
                    Labor Market Studies, 
                    Values and Conflicts in Organizations, 
                    Evaluating Human Resources, 
                    Organizational Behavior, 
                    Developing Organizational Capabilities, 
                    Management Theory and Practice, 
                    Management of Change, 
                    Leadership and Business Ethics, 
                    HRM Environment, 
                    Labor Economics,  
                    Industrial Relations, 
                    Comparative Labor Relations, 
                    International Human Resource Management, 
                    Labor Law of International Business, 
                    Issues in Training and Development, 
                    The Learning Organization, 
                    Human Resource Development, 
                    Human Resources Planning, 
                    Managing Workforce Diversity, 
                    HRM and MNCs, 
                    Grievance Handling, 
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <HRMArticles></HRMArticles>
                </div>
            </div>
        </div>
    );
};

export default HRMScope;