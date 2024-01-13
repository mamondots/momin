
import CriminalJusticeArticles from '../../../Articles/CriminalJusticeArticles/CriminalJusticeArticles';
import CriminalJusticeDetails from '../CriminalJusticeDetails/CriminalJusticeDetails';
import './CriminalJusticeHome.css'
const CriminalJusticeHome = () => {
    return (
        <div className='w-full'>

            <CriminalJusticeDetails></CriminalJusticeDetails>

            <div className='CriminalJusticeHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Law and Criminal Justice</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2374-2674 (Print Version) / 2374-2682 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jlcj</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Law and Criminal Justice</span>   is a refereed international
                    journal that seeks to publish high quality research papers in the areas of socio-legal studies and
                    the psychology of law, criminology and social justice studies. The Journal invites papers based on
                    empirical research, theoretical analysis and debate, and policy analysis and critique. The journal
                    is dedicated to presenting system-wide trends and problems on law, crime and justice throughout the
                    world. It provides a forum for social scientists to report research findings for policy making with
                    respect to crime and justice through innovative and advanced methodologies.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Law and Criminal Justice</span>  provides a comparative
                    and international overview of law and crime and justice from a cross-cultural perspective.
                    As a peer-reviewed journal, the journal encourages the submission of articles, research notes,
                    and commentaries that focus on crime and broadly defined justice-related topics in an
                    international and/or comparative context. Articles may focus on a single country or
                    compare issues affecting two or more countries. Both qualitative and quantitative
                    pieces are encouraged, providing they adhere to standards of quality scholarship.
                    Manuscripts may emphasize either contemporary or historical topics.
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
                        Each paper published in <span className='font-semibold'>Journal of Law and Criminal Justice</span> is assigned a DOI®number,
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
                        <CriminalJusticeArticles></CriminalJusticeArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriminalJusticeHome;