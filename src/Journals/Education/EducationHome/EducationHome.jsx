
import EducationArticles from '../../../Articles/EducationArticles/EducationArticles';
import EducationDetails from '../EducationDetails/EducationDetails';
import './EducationHome.css'
const EducationHome = () => {
    return (
        <div className='w-full'>

            <EducationDetails></EducationDetails>
            <div className='EducationHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Education and Human Development</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2334-296X (Print Version) / 2372-4986 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jehd</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Education and Human Development</span>  is a
                    peer-reviewed international
                    journal published by The Brooklyn Research and Publishing Institute. The journal publishes research
                    manuscripts in the fields of education and human development which would be of interest to an international
                    readership. The aim of the journal is to publish high quality manuscripts that are of international
                    significance in terms of design and/or findings by encouraging the collaboration with international
                    teams of researchers to create special issues on these topics. The journal strives to strengthen
                    connections between research and practice, so enhancing professional development and improving
                    practice within the field of education and human development. Papers accepted for publication
                    are double-blind refereed to ensure academic integrity.
                </p>

                <p className='py-4 text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Education and Human Development</span>  provides a forum
                    for the publication of high quality
                    accounting research manuscripts. The journal attempts to assist in the understanding of
                    the present and potential ability of accounting to aid in the recording and
                    interpretation of international economic transactions and taxation practices.
                    The journal recognizes that international accounting is influenced by a
                    variety of forces i.e. governmental, political and economical.
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
                        Each paper published in <span className='font-semibold'>Journal of Education and Human Development</span> is assigned a DOI®number,
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
                        <EducationArticles></EducationArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationHome;