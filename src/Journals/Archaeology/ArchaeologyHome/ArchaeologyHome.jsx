import ArchaeologyArticle from '../../../Articles/ArchaeologyArticle/ArchaeologyArticle';
import ArchaeologyDetails from '../ArchaeologyDetails/ArchaeologyDetails';
import './ArchaeologyHome.css'
const ArchaeologyHome = () => {
    return (
        <div className='w-full'>

            <ArchaeologyDetails></ArchaeologyDetails>

            <div className='ArchaeologyHome_bg text-white px-4 py-4 mt-8'>
                <div className='z-2 relative'>
                    <h2 className='font-bold text-lg py-2'>Journal of Anthropology and Archaeology</h2>
                    <div className='flex items-center space-x-2 text-sm'>
                        <p>ISSN:</p>
                        <p>2334-2420 (Print Version) / 2334-2439 (Electronic Version)</p>
                    </div>
                    <div className='flex items-center space-x-2 text-sm'>
                        <p>DOI:</p>
                        <p>10.15640/jaa</p>
                    </div>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Anthropology and Archaeology</span>  is a peer-reviewed international journal,
                    which publishes original papers promoting theoretical, methodological and empirical developments in
                    the discipline of socio-cultural anthropology. The journal provides a forum where a wide variety of
                    different anthropologies can gather together and enter into critical exchange. It encourages
                    submissions both from scholars working in anthropology and those in other disciplines whose
                    work can make a substantial contribution to topics of concern to anthropologists.
                    The journal publishes original papers that promote theoretical,
                    methodological and empirical developments within the disciplines of
                    anthropology and archeology. All research articles published in Journal of
                    Anthropology and Archaeology have undergone rigorous peer review,
                    based on initial editor screening and
                    anonymized refereeing by
                    at least two anonymous referees.
                </p>

                <div>
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
                        Each paper published in <span className='font-semibold'>Journal of Anthropology and Archaeology</span> is assigned a DOI®number,
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
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                    <div>
                        <ArchaeologyArticle></ArchaeologyArticle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchaeologyHome;