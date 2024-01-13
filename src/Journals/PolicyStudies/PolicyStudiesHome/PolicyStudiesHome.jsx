
import PolicyStudiesArticls from '../../../Articles/PolicyStudiesArticls/PolicyStudiesArticls';
import PolicyStudiesDetails from '../PolicyStudiesDetails/PolicyStudiesDetails';
import './PolicyStudiesHome.css'
const PolicyStudiesHome = () => {
    return (
        <div className='w-full'>

            <PolicyStudiesDetails></PolicyStudiesDetails>

            <div className='PolicyStudiesHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Administrative Sciences and Policy Studies</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-5109 (Print Version) / 2372-5117 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jasps</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Administrative Sciences and Policy Studies</span>  is a peer-reviewed journal that publishes the best theoretical and empirical papers on organizational studies from dissertations and the evolving, new work of more established scholars, as well as interdisciplinary work in organizational theory, and informative book reviews. The journal is devoted to academic and professional public management and public administration. It focuses on comparative and international topics. It encourages reflection on international comparisons, new techniques and approaches in governance, the dialogue between academics and practitioners, and debates about the future of public management and public administration.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Administrative Sciences and Policy Studies</span>  also encompasses issues and practices in policy analysis and public management. The target contributors are economists, public managers, independent researchers, academicians and operations researchers. The journal follows double-blind peer review process.
                </p>

                <div className='my-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p className='text-[15px]'>
                        E-Publication First<sup>TM</sup> is a feature offered through our journal platform. It allows PDF
                        version of manuscripts that have been peer reviewed and accepted, to be hosted online prior to their
                        inclusion in a final printed journal. Readers can freely access or cite the article. The accepted papers
                        are published online within one week after the completion of all necessary publishing steps.
                    </p>
                </div>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p className='text-[15px]'>
                        Each paper published in <span className='font-semibold'>Journal of Administrative Sciences and Policy Studies</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
                        (DOIs) for journal articles, books, and chapters.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Abstracted/Indexed in:</h2>
                    <p className='text-[15px]'>
                        CrossRef, CrossCheck, Cabell's, Ulrich's, Griffith Research Online, Google Scholar, Education.edu,
                        Informatics, Universe Digital Library, Standard Periodical Directory,Gale, Open J-Gate, EBSCO, Journal
                        Seek, DRJI, ProQuest, BASE, InfoBase Index, OCLC, IBSS, Academic Journal Databases, Scientific Index.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                    <div>
                        <PolicyStudiesArticls></PolicyStudiesArticls>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PolicyStudiesHome;