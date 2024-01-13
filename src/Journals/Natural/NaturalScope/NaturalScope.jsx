import LinguisticsArticles from "../../../Articles/LinguisticsArticles/LinguisticsArticles";

const NaturalScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    Astronomy and astrophysics,
                    Chemistry,
                    Earth and atmospheric sciences,
                    Physics,
                    Biology (General),
                    Agriculture,
                    Biophysics,
                    Biochemistry,
                    Botany,
                    Environmental Science,
                    Forestry,
                    Genetics,
                    Horticulture,
                    Husbandry,
                    Neuroscience,
                    Zoology,
                    Computer Science,
                    Engineering,
                    Robotics and Automation,
                    Materials science,
                    Mathematics,
                    Mechanics,
                    Statistics,
                    Health Care,
                    Public Health,
                    Nutrition and Food Science,
                    Pharmaceutical Sciences.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <LinguisticsArticles></LinguisticsArticles>
                </div>
            </div>
        </div>
    );
};

export default NaturalScope;