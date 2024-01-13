
import SociologyArtics from '../../../Articles/SociologyArtics/SociologyArtics';
import SociologyDetails from '../SociologyDetails/SociologyDetails';
import './SociologyHome.css'
const SociologyHome = () => {
    return (
        <div className='w-full'>

            <SociologyDetails></SociologyDetails>

            <div className='SociologyHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Sociology and Social Work</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-5807 (Print Version) / 2333-5815 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jssw</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Sociology and Social Work</span>  is a scholarly international journal in its fields. The journal remains a leading voice for analysis and research in the social sciences. The journal welcomes research papers from all areas of sociology, with an emphasis on theory building and innovative methods. AJS strives to speak to the general sociological reader and is open to sociologically informed contributions from anthropologists, statisticians, economists, educators, historians, and political scientists. The journal also publishes articles that promote, debate and analyze current themes and issues in social work theory, research, policy and practice. The journal follows double-blind peer review process.
                </p>

                <div className='py-4'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p>
                        E-Publication First<sup>TM</sup> is a feature offered through our journal platform. It allows PDF version of manuscripts that have been peer reviewed and accepted, to be hosted online prior to their inclusion in a final printed journal. Readers can freely access or cite the article. The accepted papers are published online within one week after the completion of all necessary publishing steps.
                    </p>
                </div>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Sociology and Social Work</span> is assigned a DOI®number,
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
                        <SociologyArtics></SociologyArtics>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SociologyHome;