
import PeaceArticles from '../../../Articles/PeaceArticles/PeaceArticles';
import './PeaceHome.css'
const PeaceHome = () => {
    return (
        <div className='w-full'>
            <div className='PeaceHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Global Peace and Conflict</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-584X (Print Version) / 2333-5858 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jgpc</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Global Peace and Conflict</span> is double blind peer reviewed international academic journal that publishes scientific research papers on every aspect of peace and conflict studies. The journal is committed to interdisciplinary explorations of conflict resolution, peace building, humanitarian assistance, and other mechanisms that seek to prevent and control violence. The journal is also interested in articles focusing on social change and nonviolence, including such areas as sustainable development, reflective practice, action research, human rights, and intercultural relations. It provides a forum for dialogue around various ideas, assessments, recommendations, and critiques. All research articles in this journal have undergone initial editorial screen and rigorous peer review.
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
                        Each paper published in <span className='font-semibold'>Journal of Global Peace and Conflict</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
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
                         <PeaceArticles></PeaceArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeaceHome;