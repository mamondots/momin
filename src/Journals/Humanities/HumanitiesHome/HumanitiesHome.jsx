

import HumanitiesArticles from '../../../Articles/HumanitiesArticles/HumanitiesArticles';
import HumanitiesDetails from '../HumanitiesDetails/HumanitiesDetails';
import './HumanitiesHome.css'
const HumanitiesHome = () => {
    return (
        <div className='w-full'>

            <HumanitiesDetails></HumanitiesDetails>

            <div className='HumanitiesHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Review of Arts and Humanities</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2334-2927 (Print Version) / 2334-2935 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/rah</p>
                </div>
            </div>

            <div className='py-6 text-[15px]'>
                <p>
                    <span className='font-medium text-[#91000D]'>Review of Arts and Humanities</span>  is an international journal that fosters a dialogue between the humanities and arts and the bio-medical, psychological, behavioral, and social sciences. All articles in this journal have undergone editorial screening and double-blind peer review by at least two reviewers. The aim of the editors is to publish timely, useful and informative results that will be of value to a general audience. Every article published in our journal is promoted to researchers working in the respective fields.
                </p>
                <p className='py-2'>
                    <span className='font-medium text-[#91000D]'>Review of Arts and Humanities</span>  encourages original research, creative work, and critical discourse on traditional, contemporary, and popular issues in arts and issues in the field of humanities studies. Contribution can be in the form of conceptual or theoretical approaches, case studies or essays in the field of arts and humanities. Contributions in the field of arts may include article writings, critical essays, historical documentation, interviews, performance texts and plays and book review. The journal promotes exploration of the interdisciplinary connections among the humanistic disciplines. The journal is relevant to social researchers, artists, curators, writers, theorists and policymakers with an interest in, and a concern for, arts practice, arts theory and research and other
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
                        Each paper published in <span className='font-semibold'>Review of Arts and Humanities</span> is assigned a DOI®number,
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
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                    <div>
                        <HumanitiesArticles></HumanitiesArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanitiesHome;