
import MedicineArticles from '../../../Articles/MedicineArticles/MedicineArticles';
import MedicineDetails from '../MedicineDetails/MedicineDetails';
import './MedicineHome.css'
const MedicineHome = () => {
    return (
        <div className='w-full'>

            <MedicineDetails></MedicineDetails>

            <div className='MedicineHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>International Journal of Medicine and Pharmacy</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-5087 (Print Version) / 2372-5095 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijmp</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>International Journal of Medicine and Pharmacy</span>  publishes original scientific studies
                    that have direct clinical significance, and position papers on health care issues, medical education,
                    and public policy. The journal strives to publish the articles related to various disciplines of
                    medicine and pharmacy. Every article published in our journal is promoted to researchers working
                    in the respective fields. All research articles published in the journal have undergone rigorous
                    peer review, based on initial editor screening and anonymized refereeing by at least two anonymous
                    referees. The journal strives to strengthen connections between research and practice, so enhancing
                    professional development and improving practice within the field of pharmacy and medicine.
                </p>

                <div className='py-4'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p className='text-[15px]'>
                        E-Publication First<sup>TM</sup> is a feature offered through our journal platform.
                        It allows PDF version of manuscripts that have been peer reviewed and accepted,
                        to be hosted online prior to their inclusion in a final printed journal.
                        Readers can freely access or cite the article.
                        The accepted papers are published online within one
                        week after the completion of all necessary publishing steps.
                    </p>
                </div>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p className='text-[15px]'>
                        Each paper published in <span className='font-semibold'>International Journal of Medicine and Pharmacy</span> is assigned a DOI®number,
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
                        <MedicineArticles></MedicineArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicineHome;