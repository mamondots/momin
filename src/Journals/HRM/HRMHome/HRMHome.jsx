
import HRMArticles from '../../../Articles/HRMArticles/HRMArticles';
import HRMNDetails from '../HRMNDetails/HRMNDetails';
import './HRMHome.css'
const HRMHome = () => {
    return (
        <div className='w-full'>

            <HRMNDetails></HRMNDetails>

            <div className='HRMHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Human Resources Management and Labor Studies</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-6390 (Print Version) / 2333-6404 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jhrmls</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Human Resources Management and Labor Studies</span>  is an international scholarly
                    journal that publishes original materials concerned with contemporary human resource management.
                    The journal provides practicing managers and academics with the latest concepts, tools,
                    and information for effective problem solving and decision making in the fields of HRM
                    and Labor Studies. It explores issues of societal, organizational, and individual
                    relevance. The journal publishes articles focused on new theories, new techniques,
                    case studies, models, and research trends of particular
                    significance to practicing managers.
                </p>

                <p className='py-4 text-[15px]'>
                    The target readers and beneficiaries of the journal include academic and business
                    researchers, theorists, consultants, and executives. Journal of HRM and Labor
                    Studies strives to create a bridge between theory (academic research) and real-
                    world practices, allowing academicians to learn from practitioners and allowing
                    practitioners to apply leading-edge research theories to their day-to-day operations.
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
                        Each paper published in <span className='font-semibold'>Journal of Human Resources Management and Labor Studies</span> is assigned a DOI®number,
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
                        <HRMArticles></HRMArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRMHome;