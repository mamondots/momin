
import SportsArticles from '../../../Articles/SportsArticles/SportsArticles';
import SportsDetails from '../SportsDetails/SportsDetails';
import './SportsHome.css'
const SportsHome = () => {
    return (
        <div className='w-full'>

            <SportsDetails></SportsDetails>

            <div className='SportsHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Physical Education and Sports Management</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2373-2156 (Print Version) / 2373-2164 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jpesm</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Physical Education and Sports Management</span>  is the official
                    research journal of Research Institute for Policy Development. The purpose of the journal
                    is to provide a forum for high quality educational research for a national and international
                    readership. The journal intends this research to have a high impact on both policy and practice.
                    It publishes research that reports educational practices in all appropriate contexts,
                    in particular school physical education, club sport, and active leisure programs.
                    We accept for review papers on a broad range of physical activities,
                    including aquatics, dance, exercise, gymnastics, outdoor and adventure activities,
                    meditative and martial arts and sport.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Physical Education and Sports Management</span>  is also concerned
                    with the management, marketing, and governance of sport at all levels and in all its
                    manifestations -- whether as an entertainment, a recreation, or an occupation.
                    The journal encourages collaboration between scholars and practitioners.
                    It welcomes submissions reporting research, new applications,
                    advances in theory, and case studies.
                    The journal follows double-blind peer review process.
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
                        Each paper published in <span className='font-semibold'>Journal of Physical Education and Sports Management</span> is assigned a DOI®number,
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
                        <SportsArticles></SportsArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsHome;