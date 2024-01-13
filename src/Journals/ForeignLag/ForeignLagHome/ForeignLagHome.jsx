
import ForeignLagArticles from '../../../Articles/ForeignLagArticles/ForeignLagArticles';
import ForeignLagDetails from '../ForeignLagDetails/ForeignLagDetails';
import './ForeignLagHome.css'
const ForeignLagHome = () => {
    return (
        <div className='w-full'>

            <ForeignLagDetails></ForeignLagDetails>

            <div className='CultureHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Foreign Languages, Cultures & Civilizations</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-5882 (Print Version) / 2333-5890 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jflcc</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Foreign Languages, Cultures & Civilizations</span>  an international peer-reviewed journal published by The Brooklyn Research and Publishing Institute. The journal aims at publishing the most innovative peer-reviewed articles from the discipline of international studies, as well as original thinking from elsewhere in the social sciences with an international dimension. Interdisciplinary and wide-ranging in scope, the journal provides a forum for discussion on the latest developments in the theory of international relations, welcoming innovative and critical approaches.
                </p>

                <p className='py-2'>
                    <span className='font-medium text-[#91000D]'>Journal of Foreign Languages, Cultures & Civilizations</span>  seeks to acquaint a broad audience of readers with the best work being done in the variety of intellectual traditions included under the rubric of international studies. Therefore, the editors welcome all submissions addressing this community's theoretical, empirical, and normative concerns. First preference will continue to be given to articles that address and contribute to important disciplinary and interdisciplinary questions and controversies.
                </p>

                <div className='py-4'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p>
                        E-Publication First<sup>TM</sup> is a feature offered through our journal platform.
                        It allows PDF version of manuscripts that have been peer reviewed and accepted,
                        to be hosted online prior to their inclusion in a final printed journal.
                        Readers can freely access or cite the article. The accepted papers are
                        published online within one week after the completion of all necessary
                        publishing steps.
                    </p>
                </div>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Foreign Languages, Cultures & Civilizations</span> is assigned a DOI®number,
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
                        <ForeignLagArticles></ForeignLagArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForeignLagHome;