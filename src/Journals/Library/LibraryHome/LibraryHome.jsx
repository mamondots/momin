
import LibraryArticles from '../../../Articles/LibraryArticles/LibraryArticles';
import './LibraryHome.css'
const LibraryHome = () => {
    return (
        <div className='w-full'>
            <div className='LibraryHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Library and Information Sciences</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2374-2372 (Print Version) / 2374-2364 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jlis</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Library and Information Sciences</span>  is a peer-reviewed international journal published by The Brooklyn Research and Publishing Institute. The target audience of the journal includes librarians, information scientists, specialists, managers and educators. The journal aims at publishing the research papers with the most recent issues and developments in the field. All papers are subject to a double-blind reviewing process. It is particularly interested in the intersection of librarianship and publishing and the resulting role of libraries in both content dissemination and content creation.
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
                        Each paper published in <span className='font-semibold'>Journal of Library and Information Sciences</span> is assigned a DOI®number,
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
                        <LibraryArticles></LibraryArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryHome;