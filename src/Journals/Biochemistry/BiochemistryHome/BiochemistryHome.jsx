
import BiochemistryArticles from '../../../Articles/BiochemistryArticles/BiochemistryArticles';
import BiochemistryDetails from '../BiochemistryDetails/BiochemistryDetails';
import './BiochemistryHome.css'
const BiochemistryHome = () => {
    return (
        <div className='w-full'>

            <BiochemistryDetails></BiochemistryDetails>

            <div className='BiochemistryHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Chemistry and Biochemistry</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2374-2712 (Print Version) / 2374-2720 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jcb</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Chemistry and Biochemistry</span>  is a peer-reviewed
                    international journal published by The Brooklyn Research and Publishing Institute. The Journal brings together
                    multidisciplinary interests in one journal and is to disseminate information on all aspects of research and
                    development in chemistry as well as biochemistry. Contributions in the form of research articles and short
                    communications are considered for publication. It is devoted to the publication of contributions in all
                    fields of experimental and applied researches of chemistry. The editors welcome original contributions
                    that have not been published and are not under consideration elsewhere.
                    Papers accepted for publication are double-blind refereed to ensure academic integrity.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Chemistry and Biochemistry</span>  provides a forum
                    for the publication of high quality
                    accounting research manuscripts. The journal attempts to assist in the understanding of
                    the present and potential ability of accounting to aid in the recording and
                    interpretation of international economic transactions and taxation practices.
                    The journal recognizes that international accounting is influenced by a
                    variety of forces i.e. governmental, political and economical.
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
                        Each paper published in <span className='font-semibold'>Journal of Chemistry and Biochemistry</span> is assigned a DOI®number,
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
                        <BiochemistryArticles></BiochemistryArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiochemistryHome;