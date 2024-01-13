
import StrategicArticles from '../../../Articles/StrategicArticles/StrategicArticles';
import './StrategicHome.css'
const StrategicHome = () => {
    return (
        <div className='w-full'>
            <div className='StrategicHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Strategic Management Quarterly</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-4951 (Print Version) / 2372-496X (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/smq</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Strategic Management Quarterly</span>  is a peer reviewed
                    international academic journal that publishes original materials concerned with all aspects of strategic
                    management. The journal publishes the research papers devoted to the improvement and further development
                    of the theory and practice of strategic management. The journal provides a communication forum for
                    advancing strategic management theory and practice. The Journal seeks to improving the existing knowledge
                    and understanding of strategy development and implementation globally in private and public organizations.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>Strategic Management Quarterly</span>  is intended for researchers,
                    faculty and other academics involved in the growing field of strategy as practice that
                    embraces emerging academics and international ideas. Papers accepted for publication are
                    double-blind refereed to ensure academic integrity. Practicing managers will also find
                    this content of value when formulating and implementing new strategic initiatives,
                    particularly the consultant market.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Strategic Management Quarterly</span> is assigned a DOI®number,
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
                        <StrategicArticles></StrategicArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategicHome;