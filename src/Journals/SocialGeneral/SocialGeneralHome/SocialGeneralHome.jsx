
import SocialGeneralArticles from '../../../Articles/SocialGeneralArticles/SocialGeneralArticles';
import './SocialGeneralHome.css'
const SocialGeneralHome = () => {
    return (
        <div className='w-full'>
            <div className='SocialGeneralHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>American International Journal of Social Science</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2325-4149 (Print Version) / 2325-4165 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.30845/aijss</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>American International Journal of Social Science</span>  is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute.. The main objective of AIJSS is to provide an intellectual platform for the international scholars. AIJSS aims to promote interdisciplinary studies in social science and become the leading journal in social science in the world.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>American International Journal of Social Science</span>  The journal publishes research papers in the fields of economics, international relations, law, development studies, population studies, political science, history, journalism and mass communication, corporate governance, cross-cultural studies, peace and conflict, library and information science, public administration, psychology, philosophy, sociology, women studies, religious studies, social welfare, anthropology, linguistics, education , management, marketing, finance, banking, accounting, human resources management, international business, hotel and tourism, entrepreneurship development, business ethics and so on.
                </p>

                <p className='py-4 text-[#91000D]'>The journal is published both in print and online versions.</p>
                <p>
                    AIJSS publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics in social science will occasionally be published.
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
                        Each paper published in <span className='font-semibold'>American International Journal of Social Science</span> is assigned a DOI®number,
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
                        <SocialGeneralArticles></SocialGeneralArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialGeneralHome;