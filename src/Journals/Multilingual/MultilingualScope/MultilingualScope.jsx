import MultilingualArticles from "../../../Articles/MultilingualArticles/MultilingualArticles";

const MultilingualScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    Art and Art History,
                    Business,
                    Management,
                    Economics,
                    Agriculture,
                    Arts & Music,
                    Anthropology,
                    Geography,
                    Biology,
                    Physics,
                    Chemistry,
                    Medical Science,
                    Medicine,
                    History,
                    Journalism,
                    Language,
                    Communication Studies,
                    Law,
                    Mathematics,
                    Statistics,
                    Philosophy,
                    Theology,
                    Education,
                    Social Science,
                    Humanities,
                    Sociology,
                    Public Administration,
                    Psychology,
                    Computer Science,
                    Information Technology,
                    Engineering,
                    Governance,
                    International Politics,
                    International Relations,
                    International Studies,
                    Physical Education,
                    Nursing,
                    Women's Studies,
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <MultilingualArticles></MultilingualArticles>
                </div>
            </div>
        </div>
    );
};

export default MultilingualScope;