import HealthArticles from "../../../Articles/HealthArticles/HealthArticles";


const HealthScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p className="text-[15px]">
                    Epidemiology,
                    Basic Phlebotomy Techniques,
                    Phlebotomy for Nursing,
                    Phlebotomy Clinical,
                    Non-Invasive Electrocardiography,
                    Non-Invasive Electrocardiography Clinical,
                    Medical Assistant Administrative Procedures,
                    Health Insurance for Medical Assistants,
                    Health Care Collaboration,
                    CPR – Basic Life Support for Health Care Providers,
                    Legal and Ethical Aspects of Health Care,
                    Pathophysiology for Medical Assisting,
                    Pharmacology for Medical Assisting,
                    Assisting with Medical Specialties,
                    Medical Assistant Clinical Procedures,
                    Workplace Development for Medical Assistants,
                    Environmental health sciences,
                    Biostatistics,
                    Health Policy & Management,
                    Population & Family Health,
                    Sociomedical Sciences,
                    Climate and Health,
                    Gender, Sexuality, and Health,
                    Social Inequalities and Health,
                    Infection and Immunity,
                    Current Issues in Health Care,
                    History of the US Health System,
                    Research and Design for Health Care,
                    Health Care Practice,
                    Health Services Management,
                    Conflict Resolution in Health Care,
                    Health Policy,
                    Health Care Finance,
                    Economics of Health Care Services,
                    Health Care Delivery Systems,
                    Patient Education in Health Care,
                    Therapeutic Communications for Health Care Professionals,
                    Cultural Competency in Health Care,
                    Individuals with Disabilities and Special Needs,
                    Alternative and Integrative Medicines in Health Care,
                    Fundamentals of Chinese Medicine,
                    Sports Medicine Principles and Practice,
                    Health Promotion and Disease Prevention,
                    Bioterrorism: Health Care Readiness and Response,
                    Torture, Violence and Trauma,
                    Topics in Maternal Child Health,
                    Statistics for Health Sciences,
                    Health Care and Aging,
                    Linguistics & Psycholinguistic Variables of Lang. ,
                    Neuroanatomy & Neurophysiology of Audition,
                    Speech and Language Disorders for Health Care Practitioners,
                    Effect of Hearing Impairment on Speech and Language,
                    Education for the Health Professions.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <HealthArticles></HealthArticles>
                </div>
            </div>
        </div>
    );
};

export default HealthScope;