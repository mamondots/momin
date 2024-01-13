
import TechnologyArticles from '../../../Articles/TechnologyArticles/TechnologyArticles';
import './TechnologyHome.css'
const TechnologyHome = () => {
    return (
        <div className='w-full'>
            <div className='TechnologyHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>International Journal of Applied Science and Technology</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2221-0997 (Print Version) /  2221-1004 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.30845/ijast</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Applied Science and Technology (IJAST)</span>   is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of IJAST is to provide an intellectual platform for the international scholars. IJAST aims to promote interdisciplinary studies in science and technology and become the leading journal in science and technology.
                </p>

                <p className='py-4'>
                    The journal publishes research papers in the fields of science and technology such as Astronomy and astrophysics, Chemistry, Earth and atmospheric sciences, Physics, Biology in general, Agriculture, Biophysics and biochemistry, Botany, Environmental Science, Forestry, Genetics, Horticulture, Husbandry, Neuroscience, Zoology, Computer science, Engineering, Robotics and Automation, Materials science, Mathematics, Mechanics, Statistics, Health Care & Public Health, Nutrition and Food Science, Pharmaceutical Sciences, and so on.
                </p>

                <div className='my-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p>
                        E-Publication First<sup>TM</sup> is a feature offered through our journal platform. It allows PDF
                        version of manuscripts that have been peer reviewed and accepted, to be hosted online prior to their
                        inclusion in a final printed journal. Readers can freely access or cite the article. The accepted papers
                        are published online within one week after the completion of all necessary publishing steps.
                    </p>
                </div>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>International Journal of Applied Science and Technology</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/' target='_blank'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
                        (DOIs) for journal articles, books, and chapters.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Abstracted/Indexed in:</h2>
                    <p>
                        CrossRef, CrossCheck, Cabell's, Ulrich's, Griffith Research Online, Google Scholar, Education.edu,
                        Informatics, Universe Digital Library, Standard Periodical Directory,Gale, Open J-Gate, EBSCO, Journal
                        Seek, DRJI, ProQuest, BASE, InfoBase Index, OCLC, IBSS, Academic Journal Databases, Scientific Index.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                    <div>
                        <TechnologyArticles></TechnologyArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyHome;