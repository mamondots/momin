
import BusinessReviewsArticles from '../../../Articles/BusinessReviewsArticles/BusinessReviewsArticles';
import BusinessReviewsDetails from '../BusinessReviewsDetails/BusinessReviewsDetails';
import './BusinessReviewsHome.css'
const BusinessReviewsHome = () => {
    return (
        <div className='w-full'>
            <BusinessReviewsDetails></BusinessReviewsDetails>
            <div className='BusinessReviewsHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Business Research Review</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2518-6698 (Print Version) / 2519-9811 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>

                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>Business Research Review</span>  is a double blind
                    peer reviewed
                    journal that publishes original research papers using analytical, empirical,
                    experimental, and field study methods in all areas of accounting research.
                    The journal publishes original scholarly papers across the whole spectrum of
                    Business. The contributions are welcomed across a wide range of
                    research methodologies (e.g. analytical, archival, experimental, survey and
                    qualitative case methods). Each paper will be judged according to international
                    standards within its topic area, the originality of its contribution,
                    its relevance to development of the subject and its quality of exposition.
                    All papers are subject to a minimum of double blind refereeing.
                </p>


                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Business Research Review</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
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
                        <BusinessReviewsArticles></BusinessReviewsArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessReviewsHome;