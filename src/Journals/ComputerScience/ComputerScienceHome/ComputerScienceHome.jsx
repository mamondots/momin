import ComputerScienceArticles from '../../../Articles/ComputerScienceArticles/ComputerScienceArticles';
import ComputerScienceDetails from '../ComputerScienceDetails/ComputerScienceDetails';
import './ComputerScienceHome.css'
const ComputerScienceHome = () => {
    return (
        <div className='w-full'>

            <ComputerScienceDetails></ComputerScienceDetails>

            <div className='ComputerScienceHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Computer Science and Information Technology</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2334-2366 (Print Version) / 2334-2374 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jcsit</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Computer Science and Information Technology</span>  is an international peer-reviewed
                    journal published by The Brooklyn Research and Publishing Institute. It is a forum for
                    scientists and engineers involved in all aspects of computer science and information
                    technology to publish high quality and refereed papers. Papers reporting original
                    research and innovative applications from all parts of the world are welcome.
                    Papers for publication in the journal are selected through rigorous peer review,
                    to ensure originality, timeliness, relevance, and readability. The journal also
                    seeks clearly written survey and review articles from experts in the field, to
                    promote insightful understanding of the state-of-the-art and technology trends.
                    All research articles in this journal have undergone initial editorial screen
                    and rigorous peer review.
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
                        Each paper published in <span className='font-semibold'>Journal of Computer Science and Information Technology</span> is assigned a DOI®number,
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
                        <ComputerScienceArticles></ComputerScienceArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerScienceHome;