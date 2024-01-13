import InternationalArticles from "../../../Articles/InternationalArticles/InternationalArticles";


const InternationalScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p className="text-[15px]">
                    Business Communication across Cultures,
                    International Business Strategies,
                    International Marketing,
                    International Human Resources Management,
                    Globalization and Business Strategy,
                    International Business Environment,
                    International Operation Management,
                    Negotiation across cultures,
                    International Insurance and Banking,
                    International Economics and Business,
                    Global Politics and Business,
                    Regional Integration,
                    International Financial Management,
                    International Accounting and Taxation,
                    Global Entrepreneurship,
                    International Business Strategies,
                    International Economics,
                    Cross-cultural Studies and International Business,
                    Free Trade Agreements,
                    WTO and International Business,
                    European Union and International Economics,
                    Regional Trade Blocks,
                    International Business Law,
                    International Political Economy,
                    Host and Home Government’s Policies and International Business Strategies,
                    Trade Policy, Politics and Governance,
                    International Business Ethics,
                    Leadership across cultures,
                    Comparative Management.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <InternationalArticles></InternationalArticles>
                </div>
            </div>
        </div>
    );
};

export default InternationalScope;