import GenderArticles from '../../../Articles/GenderArticles/GenderArticles';
import IjatArticles from '../../../Articles/IjatArticles/IjatArticles';
import GenderDetails from '../GenderDetails/GenderDetails';
import './GenderHome.css'
const GenderHome = () => {
    return (
        <div className='w-full'>
            <GenderDetails></GenderDetails>
            <div className='GenderHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>International Journal of Gender & Women's Studies</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-6021 (Print Version) / 2333-603X (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijgws</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Gender and Women's Studies</span>  is an interdisciplinary
                    international journal which publishes articles relating to gender
                    and sex from a feminist perspective covering a wide range of subject
                    areas including the social and natural sciences, the arts,
                    the humanities and popular culture. The journal seeks articles
                    from around the world that examine gender and the social
                    construction of relationships among genders.
                    In drafting papers authors should consider
                    the readability of their paper for readers outside of their discipline.
                    Articles appearing in Journal of Gender
                    and Women’s Studies analyze gender and gendered processes in interactions,
                    organizations, societies, and global and transnational spaces.
                    The journal primarily publishes empirical articles,
                    which are both theoretically engaged and methodologically rigorous,
                    including qualitative, quantitative, and comparative methodologies.
                    The journal also publishes reviews of books from a diverse array of social science disciplines.
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
                        Each paper published in <span className='font-semibold'>International Journal of Gender & Women's Studies</span> is assigned a DOI®number,
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
                        <GenderArticles></GenderArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenderHome;