
import TourismArticles from '../../../Articles/TourismArticles/TourismArticles';
import TourismDetails from '../TourismDetails/TourismDetails';
import './TourismHome.css'
const TourismHome = () => {
    return (
        <div className='w-full'>

            <TourismDetails></TourismDetails>

            <div className='TourismHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Tourism and Hospitality Management</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-4978 (Print Version) / 2372-5133 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jthm</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Tourism and Hospitality Management</span>  is the leading international journal in the field of travel and tourism. The journal comprises a multitude of activities which together form one of the world's fastest growing international sectors. The journal takes an interdisciplinary approach and includes planning and policy aspects of international, national and regional tourism as well as specific hospitality management studies. The journal's contents reflect its integrative approach - including primary research articles, discussion of current issues, case studies, reports, book reviews and forthcoming meetings.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>Journal of Tourism and Hospitality Management</span> The journal comprises of articles are relevant to both academics and practitioners, and are the results of anonymous reviews by at least two referees chosen by the editor for their specialist knowledge. The blind peer review and editorial policies are largely contributed by the 'tourism forum' of American Association of International Researchers.
                </p>

                <div className='my-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p>
                        E-Publication First<sup>TM</sup> is a feature offered through our journal platform. It allows PDF
                        version of manuscripts that have been peer reviewed and accepted, to be hosted online prior to their
                        inclusion in a final printed journal. Readers can freely access or cite the article. The accepted papers
                        are published online within one week after the completion of all necessary publishing steps.
                    </p>
                </div>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Tourism and Hospitality Management</span> is assigned a DOI®number,
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
                        <TourismArticles></TourismArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourismHome;