import IjatArticles from "../../../Articles/IjatArticles/IjatArticles";
import ScienceReviewArticles from "../../../Articles/ScienceReviewArticles/ScienceReviewArticles";

const ScienceReviewScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="py-8 gap-24">
                <p>
                    Social Science Review (SSR) is a double blind peer reviewed international open-access journal. SSR publishes original papers, empirical research, case studies, literature review, conceptual framework, analytical and simulation models, technical notes, and book reviews. Special Issues devoted to important topics in business, humanities, social science and technology are occasionally published.
                </p>
                <p className="text-[#91000D] py-2">
                    SSR is an open access journal.
                </p>

                <p className="py-4">
                The journal publishes research papers in the fields of accounting, agriculture, anthropology, archaeology, art & art history, area studies, banking, business ethics, business law, business policy, communication, corporate governance, cross-cultural studies, demography, development studies, economics, economic theory, education, English, entrepreneurship development, environmental social science, finance, gender, women, and sexuality studies, geography, history, human resources management, industrial psychology, industrial sociology, international business, international politics, Islamic studies, language, linguistics, literature, law, management information systems, management & organization theory, marketing, mathematics, medicine, planning, political science, psychology, semiotics, social policy, social work, sociology, statistics, strategic management, tourism.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <ScienceReviewArticles></ScienceReviewArticles>
                </div>
            </div>
        </div>
    );
};

export default ScienceReviewScope;