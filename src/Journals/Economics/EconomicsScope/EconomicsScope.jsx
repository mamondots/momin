import EconomicsArticles from "../../../Articles/EconomicsArticles/EconomicsArticles";

const EconomicsScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    Econometrics, 
                    Agricultural Economics, 
                    - Managerial Economics, 
                    International Economics, 
                    Labor Economics, 
                    Public Finance, 
                    Political Economy, 
                    Game Theory, 
                    Health Economics, 
                    Development Studies, 
                    Population Studies, 
                    National Economy, 
                    Monetary and Financial Economics, 
                    Economics of Work and Family, 
                    Immigration Economics, 
                    Applied Economics, 
                    Behavioral and Experimental Economics, 
                    Education Finance and Budgeting, 
                    Regional Economics, 
                    Economic Blocks, 
                    Education in the Economy, 
                    Environmental Economics, 
                    The Law, Economics, and Organizations, 
                    The Industrial Organization, 
                    Economic Development, 
                    Economic History, 
                    Development Economics, 
                    Market Design and Electronic Marketplaces, 
                    Economics of the Natural Resources and Climate Change, 
                    Environmental Economics and Policy, 
                    Industry Structure, Strategy, and Public Policy, 
                    Economics of European Integrations, 
                    American Economic Policy, 
                    Corporate Finance, 
                    Psychology and Economics, 
                    Economic Theory, 
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <EconomicsArticles></EconomicsArticles>
                </div>
            </div>
        </div>
    );
};

export default EconomicsScope;