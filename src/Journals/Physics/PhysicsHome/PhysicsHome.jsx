
import PhysicsArticles from '../../../Articles/PhysicsArticles/PhysicsArticles';
import PhysicsDetails from '../PhysicsDetails/PhysicsDetails';
import './PhysicsHome.css'
const PhysicsHome = () => {
    return (
        <div className='w-full'>

            <PhysicsDetails></PhysicsDetails>

            <div className='PhysicsHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>International Journal of Physics and Astronomy</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-4811 (Print Version) / 2372-482X (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijpa</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Physics and Astronomy</span>  is an international journal devoted to the promotion of the recent progresses in all fields of physics and astronomy. The aim of the editors is to publish timely, useful and informative results that will be of value to a general audience. Every article published in our journal is promoted to researchers working in the respective fields. All research articles published in the journal have undergone rigorous peer review, based on initial editor screening and anonymized refereeing by at least two anonymous referees.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>International Journal of Physics and Astronomy</span>  provides a forum
                    for the publication of high quality
                    accounting research manuscripts. The journal attempts to assist in the understanding of
                    the present and potential ability of accounting to aid in the recording and
                    interpretation of international economic transactions and taxation practices.
                    The journal recognizes that international accounting is influenced by a
                    variety of forces i.e. governmental, political and economical.
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
                        Each paper published in <span className='font-semibold'>International Journal of Physics and Astronomy</span> is assigned a DOI®number,
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
                        <PhysicsArticles></PhysicsArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhysicsHome;