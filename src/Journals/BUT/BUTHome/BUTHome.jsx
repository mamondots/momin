
import BUTArticles from '../../../Articles/BUTArticles/BUTArticles';
import BUTDetails from '../BUTDetails/BUTDetails';
import './BUTHome.css'
const BUTHome = () => {
    return (
        <div className='w-full'>
            <BUTDetails></BUTDetails>
            <div className='BUTHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>International Journal of Business, Humanities and Technology</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2162-1357 (Print Version) / 2162-1381 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijat</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Business, Humanities and Technology</span>  is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The objective of IJBHT is to provide a forum for the publication of scientific articles in the fields of business, humanities and technology. In pursuit of this objective the journal not only publishes high quality research papers but also ensures that the published papers achieve broad international credibility.

                </p>

                <p className='py-4'>
                   The journal publishes research papers in the fields of management, business law, public responsibility and ethics, marketing theory and applications, business finance and investment, general business research, business and economics education, international business and economics, tourism and hospitality management, production/operations management, organizational behavior and theory, strategic management policy, social issues and public policy, management organization, statistics and econometrics, personnel and industrial relations, gender studies, cross cultural studies, entrepreneurship development, linguistics, library science, media studies, methodology, philosophy, political science, population Studies, psychology, public administration, sociology, social welfare, technology and innovation, case studies , management information systems, information technology and so on.
                </p>

                

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>International Journal of Business, Humanities and Technology</span> is assigned a DOI®number,
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
                         <BUTArticles></BUTArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BUTHome;