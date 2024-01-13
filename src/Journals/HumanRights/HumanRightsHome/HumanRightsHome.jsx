
import HumanRightsArticles from '../../../Articles/HumanRightsArticles/HumanRightsArticles';
import HumanRightsDetails from '../HumanRightsDetails/HumanRightsDetails';
import './HumanRightsHome.css'
const HumanRightsHome = () => {
    return (
        <div className='w-full'>

            <HumanRightsDetails></HumanRightsDetails>

            <div className='HumanRightsHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Social Welfare and Human Rights</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-5920 (Print Version) / 2333-5939 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jswhr</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Social Welfare and Human Rights</span>  is an international
                    journal that publishes original articles on social welfare and human rights. Its interdisciplinary approach
                    and comparative perspective promote examination of the most pressing social welfare issues of the day by
                    researchers from the various branches of the applied social sciences. The journal seeks to disseminate
                    knowledge and to encourage debate about these issues and their regional and global implications.
                    Journal of Social Welfare and Human Rights will cover and initiate crucial theoretical and
                    methodological debates of importance for the future of social welfare practice and research.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Social Welfare and Human Rights</span>  serves as an arena for the
                    public discussion and scholarly analysis of human rights, broadly conceived. It seeks to broaden
                    the study of human rights by fostering the critical re-examination of existing approaches to
                    human rights, as well as to develop new perspectives on the theory and practice of human rights.
                    The journal provides the opportunity for the critical examination of the human rights community
                    and of the different visions of human rights and different practical strategies which exist
                    within that community. The editor welcomes papers from scholars and disciplines traditionally
                    associated with the study of human rights, as well as papers from those in other disciplines
                    or fields of inquiry which have traditionally been underrepresented in the field of human rights.
                    The journal follows double-blind peer review process.
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
                        Each paper published in <span className='font-semibold'>Journal of Social Welfare and Human Rights</span> is assigned a DOI®number,
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
                        <HumanRightsArticles></HumanRightsArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanRightsHome;