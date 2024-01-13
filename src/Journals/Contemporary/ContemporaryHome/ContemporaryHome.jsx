
import ContemporaryArticls from '../../../Articles/ContemporaryArticls/ContemporaryArticls';
import ContemporaryDetails from '../ContemporaryDetails/ContemporaryDetails';
import './ContemporaryHome.css'
const ContemporaryHome = () => {
    return (
        <div className='w-full'>
            <ContemporaryDetails></ContemporaryDetails>

            <div className='ContemporaryHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Review of Contemporary Business Research</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-6412 (Print Version) / 2333-6420 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/rcbr</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>Review of Contemporary Business Research</span>  is an international journal concerned with the contemporary operation of business systems and enterprises. Its primary purpose is to make available the findings of advanced research, empirical and conceptual, into matters of global significance, such as corporate organization and growth, multinational enterprise, business efficiency, entrepreneurship, technological change, finance, marketing, human resource management, professionalization and business culture.
                </p>
                <p className='py-2'>
                    <span className='font-medium text-[#91000D]'>Review of Contemporary Business Research</span>  seeks to become a forum that stimulates the engagement between academics and practitioners interested in research in the area of contemporary business practices. This journal also features non-research materials, such as literature reviews and interviews with key figures. It disseminates current and relevant findings from worldwide business research. All research articles in this journal are rigorously peer reviewed, based on initial editor screening and anonymized reviewing by at least two referees.
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
                        Each paper published in <span className='font-semibold'>Review of Contemporary Business Research</span> is assigned a DOI®number,
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
                        <ContemporaryArticls></ContemporaryArticls>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContemporaryHome;