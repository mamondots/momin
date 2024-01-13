import HumanitiesGeneralArticles from '../../../Articles/HumanitiesGeneralArticles/HumanitiesGeneralArticles';
import HumanitiesGeneralDetails from '../HumanitiesGeneralDetails/HumanitiesGeneralDetails';
import './HumanitiesGeneralHome.css'
const HumanitiesGeneralHome = () => {
    return (
        <div className='w-full'>

            <HumanitiesGeneralDetails></HumanitiesGeneralDetails>

            <div className='HumanitiesGeneralHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>International Journal of Humanities and Social Science</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2220-8488  (Print Version) / 2221-0989 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.30845/ijhss</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Humanities and Social Science</span>  International Journal of Humanities and Social Science (IJHSS) is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of IJHSS is to provide an intellectual platform for the international scholars. IJHSS aims to promote interdisciplinary studies in humanities and social science and become the leading journal in humanities and social science in the world.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>International Journal of Humanities and Social Science</span>  The journal publishes research papers in the fields of humanities and social science such as anthropology, business studies, communication studies, corporate governance, criminology, crosscultural studies, demography, development studies, economics, education, ethics, geography, history, industrial relations, information science, international relations, law, linguistics, library science, media studies, methodology, philosophy, political science, population Studies, psychology, public administration, sociology, social welfare, linguistics, literature, paralegal, performing arts (music, theatre & dance), religious studies, visual arts, women studies and so on.
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
                        Each paper published in <span className='font-semibold'>International Journal of Humanities and Social Science</span> is assigned a DOI®number,
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
                        <HumanitiesGeneralArticles></HumanitiesGeneralArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanitiesGeneralHome;