import ForeignArticles from "../../../Articles/ForeignArticles/ForeignArticles";

const ForeignScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    Cultural Dimensions of International Relations, 
                    Borders, Traffic, Statelessness, 
                    International Relations of Europe, 
                    Chinese Politics, 
                    East Asian Politics, 
                    Middle East Conflict and Revolution, 
                    Conflict Resolution, 
                    Modern Africa, 
                    Human Security, 
                    Race, Nation-state and International Relations, 
                    Theories of International Relations,  
                    International Inequality and Poverty, 
                    Political Economy of Global Resources, 
                    International Development Controversies, 
                    International Law, 
                    Humanitarianism, 
                    Global Governance of Climate Change, 
                    Global Governance,  
                    Comparative Foreign Policy, 
                    International Political Economy, 
                    Latin American Economic Development, 
                    Terrorism, 
                    European Security, 
                    East Asian International Relations, 
                    Nonstate Actors in International Relations, 
                    Service-Learning in Nicaragua, 
                    Global Manager as Diplomat, 
                    Gender in International Relations, 
                    Globalization, 
                    Arab-Israeli Conflict, Peace Process, 
                    American Global Strategy, 
                    BRICS on the Global Stage, 
                    Human Rights, 
                    Social Movements and Society, 
                    Sovereignty: Theory and Practice, 
                    International Relations of Migration, 
                    U.S.-China Relations, 
                    East Asian Security, 
                    European Union as a Foreign Policy Actor, 
                    International Politics, 
                    International Institutions, 
                    Nuclear Weapons, 
                    Politics of Asia,  
                    Russian Foreign Policy, 
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <ForeignArticles></ForeignArticles>
                </div>
            </div>
        </div>
    );
};

export default ForeignScope;