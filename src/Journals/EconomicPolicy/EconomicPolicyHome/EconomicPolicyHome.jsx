import EconomicPolicyArticles from '../../../Articles/EconomicPolicyArticles/EconomicPolicyArticles';
import EconomicPolicyDetails from '../EconomicPolicyDetails/EconomicPolicyDetails';
import './EconomicPolicyHome.css'
const EconomicPolicyHome = () => {
    return (
        <div className='w-full'>
            <EconomicPolicyDetails></EconomicPolicyDetails>
            <div className='AccountingHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Business & Economic Policy</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2375-0766 (Print Version) / 2375-0774 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.30845/jbep</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Business & Economic Policy</span> is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of JBEP is to provide a platform for the international scholars, academicians and researchers to share the contemporary thoughts in the fields of business and economics. JBEP aims to promote interdisciplinary studies in business and economics and thus become the leading international journal in business and economics in the world
                </p>

                <p className='py-4'>
                    The journal publishes research papers in the all the fields of business and economics such as management, marketing, finance, economics, banking, accounting, human resources management, international business, hotel and tourism, entrepreneurship development, business ethics, international trade policy, international trade law, development studies, population studies, culture and business, corporate governance, cross-cultural studies, social business, corporate social responsibility, industrial psychology, and so on.
                </p>

                <p className='py-3 text-[#91000D]'>The journal is published in both print and online.</p>
                <p>JBEP publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics in business and economics will occasionally be published. Business innovation and research strategies, tactics and tools of both theoretical and practical nature are welcome.</p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Business & Economic Policy</span> is assigned a DOI®number,
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
                         <EconomicPolicyArticles></EconomicPolicyArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EconomicPolicyHome;