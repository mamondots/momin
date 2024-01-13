
import EconomicsArticles from '../../../Articles/EconomicsArticles/EconomicsArticles';
import EconomicsDetails from '../EconomicsDetails/EconomicsDetails';
import './EconomicsHome.css'
const EconomicsHome = () => {
    return (
        <div className='w-full'>

            <EconomicsDetails></EconomicsDetails>
            
            <div className='EconomicsHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Economics and Development Studies</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2334-2382 (Print Version) / 2334-2390 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jeds</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Economics and Development Studies</span>  is an international
                    journal that effectively bridges the gap between academics, policy makers, and practitioners
                    and links the various economic development communities. The journal focuses on contemporary
                    research publication philosophies including blind strict peer refereeing, timely review,
                    regular publication and broader coverage of the field. The editorial board is represented
                    by the world's reputed and experienced academicians and researchers in the field of economics.
                    The blind peer review and editorial policies are largely contributed by the 'economics forum'
                    of American Association of International Researchers. The journal is completely open access
                    which has opened the doors for the millions of international readers and academicians to keep
                    in touch with the latest research findings in the field of economics and development studies.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Economics and Development Studies</span> specializes in
                    quantitative development policy analysis. The target readers of the journal include economists and other
                    social scientists in government, business, international agencies, universities, and research institutions.
                    The journal strives to provide the most current and best research in the field of economic development.
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
                        Each paper published in <span className='font-semibold'>Journal of Economics and Development Studies</span> is assigned a DOI®number,
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
                        <EconomicsArticles></EconomicsArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EconomicsHome;