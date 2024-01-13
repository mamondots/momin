
import HealthArticles from '../../../Articles/HealthArticles/HealthArticles';
import HealthDetails from '../HealthDetails/HealthDetails';
import './HealthHome.css'
const HealthHome = () => {
    return (
        <div className='w-full'>

            <HealthDetails></HealthDetails>

            <div className='HealthHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>International Journal of Health Sciences</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-5060 (Print Version) / 2372-5079 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijhs</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Health Sciences</span> is an interdisciplinary international journal that is focused on providing prompt publication of results from original research on all aspects of health. Contributions in the form of research articles and short communications are considered for publication. . It is devoted to the publication of contributions in all fields of experimental and applied researches of health sciences. The editors welcome original contributions that have not been published and are not under consideration elsewhere. Papers accepted for publication are double-blind refereed to ensure academic integrity. The journal strives to provide the most current and best research in the field of health sciences.
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
                        Each paper published in <span className='font-semibold'>International Journal of Health Sciences</span> is assigned a DOI®number,
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
                        <HealthArticles></HealthArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthHome;