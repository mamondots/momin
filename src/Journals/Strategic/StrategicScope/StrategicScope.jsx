import StrategicArticles from "../../../Articles/StrategicArticles/StrategicArticles";


const StrategicScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    Advanced Strategic Analysis,
                    Biotechnology Industry, Structure and Strategy,
                    Competitive Strategy in the Marketplace,
                    Corporate Governance,
                    Corporate Governance: Law and Business,
                    Digital Strategies,
                    Game Theory,
                    Implementing Strategy,
                    International Social Impact Strategies,
                    Managing Change,
                    Managing Financial Businesses,
                    Managing Innovation,
                    Managing the Growing Company,
                    Multinational Business Management,
                    Restructuring Firms and Industries,
                    Service Operations and Strategy,
                    Strategic Marketing and Planning,
                    Strategies: Mergers and Acquisitions,
                    The Economics of Social and Other Networks,
                    Global Strategy and Competitive Advantage,
                    Strategic Investment Decisions,
                    Managing Diversifications,
                    Strategic Alliances,
                    Technology and Business Strategy.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <StrategicArticles></StrategicArticles>
                </div>
            </div>
        </div>
    );
};

export default StrategicScope;