
import MusicArticle from '../../../Articles/MusicArticle/MusicArticle';
import MusicDetails from '../MusicDetails/MusicDetails';
import './MusicHome.css'
const MusicHome = () => {
    return (
        <div className='w-full'>

            <MusicDetails></MusicDetails>

            <div className='MusicHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>International Journal of Music and Performing Arts</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2374-2690 (Print Version) / 2374-2704 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijmpa</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>International Journal of Music and Performing Arts</span>  is a fully
                    refereed international journal that provides clear, stimulating
                    and readable accounts of contemporary research in music and performing arts worldwide,
                    and a section containing extended book reviews which further current debates.
                    The journal strives to strengthen connections between research and practice,
                    so enhancing professional development and improving practice within the field
                    of music education and performing arts. The range of subjects covers music
                    teaching and learning in formal and informal contexts including classroom,
                    individual, group and whole class instrumental and vocal teaching, music in
                    higher education, international comparative music education, music in community
                    settings, and teacher education.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>International Journal of Music and Performing Arts</span>  fosters conceptual and
                    technical innovations in abstract, systematic musical thought and cultivates the historical
                    study of musical concepts and compositional techniques. The journal publishes research with
                    important and broad applications in the analysis of music and the history of music theory as
                    well as theoretical or metatheoretical work that engages and stimulates ongoing discourse in
                    the field. While remaining true to its original formalist outlook, the journal also addresses
                    the influences of philosophy, mathematics, computer science, cognitive sciences, and anthropology
                    on music theory and performing arts.
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
                        Each paper published in <span className='font-semibold'>International Journal of Music and Performing Arts</span> is assigned a DOI®number,
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
                        <MusicArticle></MusicArticle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicHome;