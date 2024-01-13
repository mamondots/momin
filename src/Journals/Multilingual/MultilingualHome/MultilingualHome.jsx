
import MultilingualArticles from '../../../Articles/MultilingualArticles/MultilingualArticles';
import './MultilingualHome.css'
const MultilingualHome = () => {
    return (
        <div className='w-full'>
            <div className='MultilingualHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>International Multilingual Journal of Contemporary Research</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-4978 (Print Version) / 2372-4986 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijat</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>International Multilingual Journal of Contemporary Research</span>  is an international peer-reviewed Journal.
                    It publishes research papers focused on contemporary issues from every aspect of
                    the business and economics, humanities and the social sciences, and science and technology.
                    This is the only journal of The Brooklyn Research and Publishing Institute
                    which is published in various languages as per the choice of the author.
                    The journal follows double-blind peer review process.
                    The journal seeks original manuscripts that provide
                    theoretically informed empirical analyses of worldwide contemporary issues,
                    as well as original theoretical or conceptual analyses.
                </p>

                <div className='py-4'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p>
                        E-Publication First<sup>TM</sup> is a feature offered through our journal platform.
                        It allows PDF version of manuscripts that have been peer reviewed and accepted,
                        to be hosted online prior to their inclusion in a final printed journal.
                        Readers can freely access or cite the article. The accepted papers are
                        published online within one week after the completion of all necessary publishing steps.
                    </p>
                </div>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>International Multilingual Journal of Contemporary Research</span> is assigned a DOI®number,
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
                        <MultilingualArticles></MultilingualArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultilingualHome;