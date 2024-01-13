
import CultureArticles from '../../../Articles/CultureArticles/CultureArticles';
import CultureDetaisl from '../CultureDetaisl/CultureDetaisl';
import './CultureHome.css'
const CultureHome = () => {
    return (
        <div className='w-full'>

            <CultureDetaisl></CultureDetaisl>

            <div className='CultureHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Islamic Studies and Culture</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-5904 (Print Version) / 2333-5912 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jisc</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Islamic Studies and Culture</span>  is a peer reviewed
                    international scholarly journal published by The Brooklyn Research and Publishing Institute.
                    The journal is dedicated to the scholarly study of all aspects of Islam and of the Islamic world.
                    Particular attention is paid to works dealing with history, geography, political science, economics,
                    anthropology, sociology, law, literature, religion, philosophy, international relations,
                    environmental and developmental issues, as well as ethical questions related to
                    scientific research. The journal is committed to the publication of original
                    research on Islam as culture and civilization. It particularly welcomes work
                    of an interdisciplinary nature that brings together history, religion, politics,
                    culture and law. The Journal has a special focus on Islam in Africa,
                    and on contemporary Islamic Thought. Contributions that display theoretical
                    rigor especially work that link the particularities of Islamic discourse to
                    the enterprise of knowledge and critique in the humanities and social sciences,
                    will find Journal of Islamic Studies and Culture to be receptive to such submissions.
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
                        Each paper published in <span className='font-semibold'>Journal of Islamic Studies and Culture</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
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
                        <CultureArticles></CultureArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultureHome;