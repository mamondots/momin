import EducationPolicyArticles from "../../../Articles/EducationPolicyArticles/EducationPolicyArticles";
import IjatArticles from "../../../Articles/IjatArticles/IjatArticles";

const EducationPolicyScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="py-8 gap-24">
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Education & Social Policy (JESP)</span>   is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of JESP is to provide a platform for the international scholars, academicians and researchers to share the contemporary thoughts in the fields of education and social policies. JBEP aims to promote policy development in education and thus become the leading international journal in education in the world.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>The journal publishes research papers in the all the fields of education and social policy stated below:</span> 
                 </p>

                 <p>Education: Elementary Education, Secondary Education, Health Promotion, Minor Education Studies, Special Education, Nutrition Education, Bilingual Education, International Training And Education, Learning Disabilities, Teaching, Peace And Conflict Resolution, Curriculum And Instruction, Experiential Learning, Social Justice And Urban Education, Psychology Of Education, Technology In Education, Gender And Cultural Diversity In School, Comparative And International Education, Cultural Factors In Higher Education, Education And Social Change, Children's Literature, Language And Literacy Learning, Education And Public Policy, Leadership Skills, Classroom Management, Legal Issues In Education, Student Teaching, and so on.</p>
                <p className='py-4'>Social Policy: Human Rights, Social Work, Social Welfare, Gender, Women’s Studies, Religion, Welfare State, Social Security, Unemployment Insurance, Environmental Policy, Economic Policy, Human Behavior, Pensions, Health Care, Social Housing, Social Care, Child Protection, Social Exclusion, Education Policy, Crime and Criminal Justice and so on.</p>

                <p className="text-[#91000D]">The journal is published in both print and online.</p>
                <p className="py-4">JESP publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics in education will occasionally be published.</p>
            </div>

            <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                    <div>
                         <EducationPolicyArticles></EducationPolicyArticles>
                    </div>
                </div>
        </div>
    );
};

export default EducationPolicyScope;