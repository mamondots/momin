
import LinguisticsCpiArticles from '../../../Articles/LinguisticsCpiArticles/LinguisticsCpiArticles';
import './LinguisticsCpiHome.css'
const LinguisticsCpiHome = () => {
    return (
        <div className='w-full'>
            <div className='LinguisticsCpiHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>International Journal of Language and Linguistics</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2374-8850 (Print Version) / 2374-8869 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.30845/ijll</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Language and Linguistics (IJLL)</span>  is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of IJLL is to provide a platform for the international scholars, academicians and researchers to share the contemporary thoughts in the fields of language, literature and linguistics. IJLL aims to promote interdisciplinary studies in language, literature and linguistics and thus become the leading international journal in language, literature and linguistics in the world.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>International Journal of Language and Linguistics (IJLL)</span> The journal publishes research papers in the all the fields of language, literature and linguistics such as fundamentals of languages, ELT, the sounds and words of language, structures and meanings, language and gender, sociolinguistics, English syntax, historical linguistics, origins/evolution of language, experimental linguistics, phonology, endangered/minority languages, language and nature, communicative strategies, linguistic anthropology, linguistic analysis, language and alienation, Hispanic linguistics, analyzing Chinese language, philosophy of language, psychology of language, field methods in linguistics, history of the Spanish language, Spanish dialectology, applied linguistics, language, brain and society, advertising and propaganda, phonetics, morphology narrative and memory, thinking and writing across the curriculum, literary research methods, literary discourse, British literature, American literature, professional writing, conflict and community, studies in trauma literature, creative writing, critical writing, african literature, literature of American diversity, American fiction, the epic tradition, biographic arts, women in literature and psychology, film and literature, romanticism, Victorian literature, world literature, and so on.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>International Journal of Language and Linguistics </span> is assigned a DOI®number,
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
                         <LinguisticsCpiArticles></LinguisticsCpiArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinguisticsCpiHome;