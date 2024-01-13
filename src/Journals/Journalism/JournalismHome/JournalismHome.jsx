

import JournalismArticles from '../../../Articles/JournalismArticles/JournalismArticles';
import './JournalismHome.css'
const JournalismHome = () => {
    return (
        <div className='w-full'>
            <div className='JournalismHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Review of Journalism & Mass Communication</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-5742 (Print Version) / 2333-5734 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/rjmc</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Review of Journalism & Mass Communication</span>  is a quarterly, peer-reviewed international journal that focuses on research in journalism and mass communication. Each issue features reports of original investigation, presenting the latest developments in theory and methodology of communication, international communication, journalism history, and social and legal problems. Papers accepted for publication are double-blind refereed to ensure academic integrity. The journal strives to provide the most current and best research in the field of journalism and mass communication.
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
                        Each paper published in <span className='font-semibold'>Review of Journalism & Mass Communication</span> is assigned a DOI®number,
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
                        <JournalismArticles></JournalismArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalismHome;