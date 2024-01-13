
import PublicPolicyArticles from '../../../Articles/PublicPolicyArticles/PublicPolicyArticles';
import PublicPolicyDetails from '../PublicPolicyDetails/PublicPolicyDetails';
import './PublicPolicyHome.css'
const PublicPolicyHome = () => {
    return (
        <div className='w-full'>

            <PublicPolicyDetails></PublicPolicyDetails>

            <div className='PublicPolicyHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Public Policy and Administration Review</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-5823 (Print Version) / 2333-5831 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ppar</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Public Policy and Administration Review</span>  is an international
                    peer-reviewed journal published by The Brooklyn Research and Publishing Institute.
                    The journal aims at exploring the latest developments in public administration and
                    management - translating theory for practice and practice into theory.
                    The journal is truly global in scope, covering developed, emerging and
                    transitional states and all areas of public activity.
                    It welcomes both individual country-based and especially
                    comparative work. The target audience is not just scholars,
                    but also policy-makers and practitioners, including aspiring
                    public sector leaders engaged in education and research in the growing global community.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Public Policy and Administration Review</span>  strives to draw on the latest
                    research - whether carried out by scholars or practitioners or indeed collaborations.
                    The journal includes not only cutting edge research, but also: feature interviews or
                    opinion pieces from leading scholars and policy-makers; a resources section for
                    scholars and practitioners; occasional symposia and debates; and themed issues of
                    topics of special interest. Proposals in all these areas are always welcome.
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
                        Each paper published in <span className='font-semibold'>Public Policy and Administration Review</span> is assigned a DOI®number,
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
                        <PublicPolicyArticles></PublicPolicyArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicPolicyHome;