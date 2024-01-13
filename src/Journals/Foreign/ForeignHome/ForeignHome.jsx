
import ForeignArticles from '../../../Articles/ForeignArticles/ForeignArticles';
import ForeignDetails from '../ForeignDetails/ForeignDetails';
import './ForeignHome.css'
const ForeignHome = () => {
    return (
        <div className='w-full'>

            <ForeignDetails></ForeignDetails>

            <div className='ForeignHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of International Relations & Foreign Policy</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-5866 (Print Version) / 2333-5874 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jirfp</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of International Relations & Foreign Policy</span>  is an international
                    peer-reviewed journal published by The Brooklyn Research and Publishing Institute.
                    The peer-reviewed content of the journal ranges widely across the whole of International
                    Relations and covers subjects and theories of interest to researchers around the world. It
                    publishes articles on contemporary world politics and the global political economy from a
                    variety of methodologies and approaches. The journal seeks original manuscripts that provide
                    theoretically informed empirical analyses of issues in international relations and international
                    political economy, as well as original theoretical or conceptual analyses. The journal follows
                    double-blind peer review process.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of International Relations & Foreign Policy</span>  provides an open
                    forum for research publication that enhances the communication of concepts and ideas across theoretical,
                    methodological, geographical and disciplinary boundaries. By emphasizing accessibility of content for
                    scholars of all perspectives and approaches in the editorial and review process, Journal of International
                    Relations and Foreign Policy serves as a source for efforts at theoretical and methodological integration
                    and deepening the conceptual debates throughout this rich and complex academic research tradition. Foreign
                    policy analysis, as a field of study, is characterized by its actor-specific focus. The underlying, often
                    implicit argument is that the source of international politics and change in international politics is
                    human beings, acting individually or in groups. In the simplest terms, foreign policy analysis is the
                    study of the process, effects, causes or outputs of foreign policy decision-making in either a
                    comparative or case-specific manner.
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
                        Each paper published in <span className='font-semibold'>Journal of International Relations & Foreign Policy</span> is assigned a DOI®number,
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
                        <ForeignArticles></ForeignArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForeignHome;