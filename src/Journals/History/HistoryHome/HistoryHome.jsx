
import HistoryArticles from '../../../Articles/HistoryArticles/HistoryArticles';
import HistoryDetails from '../HistoryDetails/HistoryDetails';
import './HistoryHome.css'
const HistoryHome = () => {
    return (
        <div className='w-full'>

            <HistoryDetails></HistoryDetails>

            <div className='HistoryHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Review of History and Political Science</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-5718 (Print Version) / 2333-5726 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/rhps</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Review of History and Political Science (RHPS)</span>  is a
                    peer-reviewed international
                    journal published by The Brooklyn Research and Publishing Institute.
                    The RHPS is unique in its range and variety, packing its pages with
                    stimulating articles and extensive book reviews. The journal balances
                    its broad chronological coverage with a wide geographical spread of
                    articles featuring contributions from social, political, cultural,
                    economic and ecclesiastical historians. The journal also welcomes
                    contributions drawn from all fields of political science
                    (including political theory, political behavior, public
                    policy and international relations). Papers accepted for
                    publication are double-blind refereed to ensure academic integrity.
                </p>

                <div className='py-4'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p className='text-[15px]'>
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
                    <p className='text-[15px]'>
                        Each paper published in <span className='font-semibold'>Review of History and Political Science</span> is assigned a DOI®number,
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
                        <HistoryArticles></HistoryArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryHome;