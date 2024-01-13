import SocialArticles from "../../../Articles/SocialArticles/SocialArticles";


const SocialScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    Anthropology,
                    Business Studies,
                    Communication Studies,
                    Corporate Governance,
                    Criminology,
                    Cross-Cultural Studies,
                    Demography,
                    Development Studies,
                    Economics,
                    Education,
                    Ethics,
                    Geography,
                    History,
                    Industrial Relations,
                    Information Science,
                    International Relations,
                    Governance,
                    Defense and Strategic Studies,
                    Law,
                    Leadership,
                    Linguistics,
                    Library Science,
                    Media Studies,
                    Methodology,
                    Philosophy,
                    Political Science,
                    Population Studies,
                    Psychology,
                    Public Administration,
                    Sociology,
                    Social Welfare,
                    Languages,
                    Literature,
                    Paralegal,
                    Performing Arts (Music, Theatre & Dance),
                    Religious Studies,
                    Visual Arts,
                    Women Studies.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <SocialArticles></SocialArticles>
                </div>
            </div>
        </div>
    );
};

export default SocialScope;