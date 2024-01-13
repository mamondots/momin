import ContemporaryArticls from "../../../Articles/ContemporaryArticls/ContemporaryArticls";


const ContemporaryScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    International Business Environment,
                    Analysis of Contemporary Business Law,
                    International Politics and Business,
                    Innovation in Management Tools and Techniques,
                    Globalization and Business Strategy,
                    Managing Workforce Diversity,
                    Emerging Information Technologies and Business Strategies,
                    Emerging Regional Trade Blocks,
                    Role of WTO, EU, WB & IMF in Contemporary International Business,
                    Globalization and Industrial Sociology,
                    Change in National and International Economics,
                    Emerging HR Issues,
                    Corporate Governance,
                    Transformational Leadership,
                    Legal & Ethical Environment of Business,
                    Total Quality Management,
                    National and International Business Trends,
                    Changes in Capital Market,
                    Contemporary Government Policy towards Business,
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <ContemporaryArticls></ContemporaryArticls>
                </div>
            </div>
        </div>
    );
};

export default ContemporaryScope;