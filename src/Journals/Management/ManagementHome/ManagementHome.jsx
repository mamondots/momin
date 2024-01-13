
import ManagementArticles from '../../../Articles/ManagementArticles/ManagementArticles';
import ManagementDetails from '../ManagementDetails/ManagementDetails';
import './ManagementHome.css'
const ManagementHome = () => {
    return (
        <div className='w-full'>

            <ManagementDetails></ManagementDetails>

            <div className='ManagementHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Management Policies and Practices</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-6048 (Print Version) / 2333-6056 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jmpp</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Management Policies and Practices</span>  is a double blind peer reviewed international academic journal that
                    publishes scientific research papers on the policies and contemporary practices of management.
                    The journal is edited by international management practitioners and academicians.
                    The blind peer review and editorial policies are largely contributed by management
                    forum of American Association of International Researchers. The journal is completely
                    open access which has opened the doors for the millions of international readers and
                    academicians to keep in touch with the latest research findings in the field of
                    management science.

                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Management Policies and Practices</span>  provides in-depth coverage of
                    organizational problems and organization theory. It reports on the latest developments in strategic
                    management and planning, cross-cultural comparisons of organizational effectiveness and concise
                    reviews of the latest publications in management studies as well as lively debate in topical
                    and important issues on management.
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
                        Each paper published in <span className='font-semibold'>Journal of Management Policies and Practices</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/' target='_blank'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
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
                        <ManagementArticles></ManagementArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagementHome;