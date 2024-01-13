
import TechnologyArticles from "../../../Articles/TechnologyArticles/TechnologyArticles";

const TechnologyScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="py-8 gap-24">
                <p>
                    International Journal of Applied Science and Technology (IJAST) is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of IJAST is to provide an intellectual platform for the international scholars. IJAST aims to promote interdisciplinary studies in science and technology and become the leading journal in science and technology.
                </p>

                <p className="py-2">
                    The journal publishes research papers in the fields of science and technology such as Astronomy and astrophysics, Chemistry, Earth and atmospheric sciences, Physics, Biology in general, Agriculture, Biophysics and biochemistry, Botany, Environmental Science, Forestry, Genetics, Horticulture, Husbandry, Neuroscience, Zoology, Computer science, Engineering, Robotics and Automation, Materials science, Mathematics, Mechanics, Statistics, Health Care & Public Health, Nutrition and Food Science, Pharmaceutical Sciences, and so on.
                </p>

                <p className="py-2 text-[#91000D]">
                    The journal is published in both print and online versions.
                </p>

                <p>
                    IJAST publishes original research, applied, and educational articles in all areas of science and technology. Special Issues devoted to important topics in science and technology will occasionally be published.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <TechnologyArticles></TechnologyArticles>
                </div>
            </div>
        </div>
    );
};

export default TechnologyScope;