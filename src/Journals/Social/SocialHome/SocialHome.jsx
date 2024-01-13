

import SocialArticles from '../../../Articles/SocialArticles/SocialArticles';
import './SocialHome.css'
const SocialHome = () => {
    return (
        <div className='w-full'>
            <div className='SocialHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Social Science for Policy Implications</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2334-2900 (Print Version) / 2334-2919 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jsspi</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Social Science for Policy Implications</span>  is a refereed international journal that seeks to publish scholarly work in the social sciences defined in the classical sense, which is in the social sciences, the humanities, and the natural sciences. The research that is published may take a theoretical or speculative model as well as statistical and mathematical. Contributions are welcome from all fields which have relevant and insightful comments to make about the social sciences. The journal bridges social science communities across disciplines and continents with a view to sharing information and debate with the widest possible audience. It has a particular interest in policy-relevant questions and interdisciplinary approaches. It serves as a forum for review, reflection and discussion informed by the results of recent and ongoing research.
                </p>

                <div className='py-4'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p>
                        E-Publication First<sup>TM</sup> is a feature offered through our journal platform.
                        It allows PDF version of manuscripts that have been peer reviewed and accepted,
                        to be hosted online prior to their inclusion in a final printed journal.
                        Readers can freely access or cite the article. The accepted papers are
                        published online within one week after the completion of all necessary
                        publishing steps.
                    </p>
                </div>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Social Science for Policy Implications</span> is assigned a DOI®number,
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
                        <SocialArticles></SocialArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialHome;