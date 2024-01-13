
import InternationalArticles from '../../../Articles/InternationalArticles/InternationalArticles';
import InternationalDetails from '../InternationalDetails/InternationalDetails';
import './InternationalHome.css'
const InternationalHome = () => {
    return (
        <div className='w-full'>
            <InternationalDetails></InternationalDetails>
            <div className='InternationalHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of International Business and Economics</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2374-2208 (Print Version) / 2374-2194 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jibe</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of International Business and Economics</span>  is an international journal that effectively provides a forum for academics and professionals to share the latest developments and advances in knowledge and practice of international business. The blind peer review and editorial policies are largely contributed by the 'international business forum' of American Association of International Researchers. The journal seeks to foster the exchange of ideas on a range of important international subjects and to provide stimulus for research and the further development of international perspectives. The international perspective is further enhanced by the cross-cultural spread of the contributors.
                </p>

                <p className='py-2'>
                    The journal comprises of empirical studies with practical applications and examinations of theoretical and methodological developments in the field of international business studies. The quick review process, rich editorial board and quality publications have already made this journal unique. The Journal's broad scope and developmental editorial policies create accessible, thought-provoking content for the general academic business community.
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
                        Each paper published in <span className='font-semibold'>Journal of International Business and Economics</span> is assigned a DOI®number,
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
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                    <div>
                        <InternationalArticles></InternationalArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternationalHome;