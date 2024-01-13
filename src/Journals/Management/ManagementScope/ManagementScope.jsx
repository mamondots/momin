import ManagementArticles from "../../../Articles/ManagementArticles/ManagementArticles";


const ManagementScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    Administrative Management,
                    Environmental Context of Management,
                    Organizational Culture,
                    Global Issues Affecting Managerial Decisions,
                    Basic Activities of Management,
                    Scientific Management,
                    Organizational Design,
                    Organizational Change,
                    Organizational Development,
                    Individual Behavior in Business Organizations,
                    Motivation,
                    Leadership,
                    Controlling Tools and Techniques,
                    International Management,
                    Strategic Management,
                    Comparative Management,
                    Organizational Innovation,
                    Production Management,
                    Human Resources Management,
                    Total Quality Management,
                    Supply Chain Management,
                    Industrial Relations,
                    Labor Economics,
                    Managerial Communication,
                    Organizational Conflict,
                    Decision Making Tools and Techniques,
                    Management Information System,
                    Management Thoughts,
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <ManagementArticles></ManagementArticles>
                </div>
            </div>
        </div>
    );
};

export default ManagementScope;