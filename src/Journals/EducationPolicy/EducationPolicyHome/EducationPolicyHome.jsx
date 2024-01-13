import EducationPolicyArticles from '../../../Articles/EducationPolicyArticles/EducationPolicyArticles';
import IjatArticles from '../../../Articles/IjatArticles/IjatArticles';
import './EducationPolicyHome.css'
const EducationPolicyHome = () => {
    return (
        <div className='w-full'>
            <div className='EducationPolicyHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Education & Social Policy</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-4978 (Print Version) / 2372-4986 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijat</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Education & Social Policy (JESP)</span>   is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of JESP is to provide a platform for the international scholars, academicians and researchers to share the contemporary thoughts in the fields of education and social policies. JBEP aims to promote policy development in education and thus become the leading international journal in education in the world.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>The journal publishes research papers in the all the fields of education and social policy stated below:</span> 
                 </p>

                 <p>Education: Elementary Education, Secondary Education, Health Promotion, Minor Education Studies, Special Education, Nutrition Education, Bilingual Education, International Training And Education, Learning Disabilities, Teaching, Peace And Conflict Resolution, Curriculum And Instruction, Experiential Learning, Social Justice And Urban Education, Psychology Of Education, Technology In Education, Gender And Cultural Diversity In School, Comparative And International Education, Cultural Factors In Higher Education, Education And Social Change, Children's Literature, Language And Literacy Learning, Education And Public Policy, Leadership Skills, Classroom Management, Legal Issues In Education, Student Teaching, and so on.</p>
                <p className='py-4'>Social Policy: Human Rights, Social Work, Social Welfare, Gender, Women’s Studies, Religion, Welfare State, Social Security, Unemployment Insurance, Environmental Policy, Economic Policy, Human Behavior, Pensions, Health Care, Social Housing, Social Care, Child Protection, Social Exclusion, Education Policy, Crime and Criminal Justice and so on.</p>
                <div>

                <div className='my-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p>
                        E-Publication First<sup>TM</sup> is a feature offered through our journal platform. It allows PDF
                        version of manuscripts that have been peer reviewed and accepted, to be hosted online prior to their
                        inclusion in a final printed journal. Readers can freely access or cite the article. The accepted papers
                        are published online within one week after the completion of all necessary publishing steps.
                    </p>
                </div>
                
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Education & Social Policy (JESP)</span> is assigned a DOI®number,
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
                         <EducationPolicyArticles></EducationPolicyArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationPolicyHome;