import JaesArticles from "../../../Articles/JaesArticles/JaesArticles";

const JaesScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-2 gap-24">
                <p>
                    Basic Agriculture,
                    Fruit Production,
                    Animal Science,
                    Introduction to Animal Nutrition,
                    Soil Science,
                    Meat and Meat Processing,
                    Landscaping,
                    General Horticulture,
                    Marketing Agricultural Products,
                    Poultry Science,
                    Economic Entomology,
                    Plant Pathology,
                    Farm Management,
                    Vegetable Gardening,
                    Livestock Selection and Breeding,
                    Fundamentals of Crop Production,
                    Horticultural Plant Materials,
                    Agriculture and Natural Resources Machinery,
                    Agricultural and Natural Resources Power,
                    Entomology,
                    Problems in Agriculture and Natural Resources,
                    Sustainable Agriculture,
                    Beef and Sheep Production,
                    Methods of Teaching Agriculture,
                    Plant Cell and Tissue Culture,
                    Principles of Weed Science,
                    Plant Propagation and Greenhouse Management,
                    Food Distribution Management,
                    Ecosystems,
                    Forage Crop Production and Management,
                    Beef Production and Management,
                    Pork Production and Management,
                    Co-Op Agriculture and Natural Resources,
                    Agro Industry,
                    Agricultural Economics,
                    Environmental Policy,
                    Environmental Ethics,
                    Environmental Impact Assessment,
                    Environmental Education,
                    Toxicology,
                    Natural History,
                    General Occupational Safety and Health,
                    Environmental Law and Practice,
                    Natural Environment and Business,
                    Natural Resources and International Politics,
                    Ecological Field Methods,
                    Strategies for Sustainable Environmental Development,
                    Water Resource Analysis,
                    Ecology,
                    Marine Environments,
                    Climate Change,
                    Energy and Environment,
                    Waste Management.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <JaesArticles></JaesArticles>
                </div>
            </div>
        </div>
    );
};

export default JaesScope;