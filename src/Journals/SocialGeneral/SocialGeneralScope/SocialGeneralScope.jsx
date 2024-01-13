
import SocialGeneralArticles from "../../../Articles/SocialGeneralArticles/SocialGeneralArticles";

const SocialGeneralScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="py-8 gap-24">
                <p>
                    <span className='font-medium text-[#91000D]'>American International Journal of Social Science</span>  is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute.. The main objective of AIJSS is to provide an intellectual platform for the international scholars. AIJSS aims to promote interdisciplinary studies in social science and become the leading journal in social science in the world.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>American International Journal of Social Science</span>  The journal publishes research papers in the fields of economics, international relations, law, development studies, population studies, political science, history, journalism and mass communication, corporate governance, cross-cultural studies, peace and conflict, library and information science, public administration, psychology, philosophy, sociology, women studies, religious studies, social welfare, anthropology, linguistics, education , management, marketing, finance, banking, accounting, human resources management, international business, hotel and tourism, entrepreneurship development, business ethics and so on.
                </p>

                <p className='py-4 text-[#91000D]'>The journal is published both in print and online versions.</p>
                <p>
                    AIJSS publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics in social science will occasionally be published.
                </p>
            
            </div>

            <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                    <div>
                         <SocialGeneralArticles></SocialGeneralArticles>
                    </div>
                </div>
        </div>
    );
};

export default SocialGeneralScope;