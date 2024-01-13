import BusinessGeneralArticles from "../../../Articles/BusinessGeneralArticles/BusinessGeneralArticles";

const BusinessGeneralScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className=" py-4 gap-24 text-[15px]">
                <p>
                    International Journal of Business and Social Science (IJBSS) is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute.. The main objective of IJBSS is to provide an intellectual platform for the international scholars. IJBSS aims to promote interdisciplinary studies in business and social science and become the leading journal in business and social science in the world.
                </p>

                <p className="py-2">
                    The journal publishes research papers in the fields of management, marketing, finance, economics, banking, accounting, human resources management, international business, hotel and tourism, entrepreneurship development, business ethics, international relations, law, development studies, population studies, political science, history, journalism and mass communication, corporate governance, cross-cultural studies, public administration, psychology, philosophy, sociology, women studies, religious studies, social welfare, anthropology, linguistics, education and so on.
                </p>

                <p className="text-[#91000D]">
                    The journal is published in both printed and online versions.
                </p>

                <p className="py-2">
                    IJBSS publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics in business and social science will occasionally be published. Business innovation and research strategies, tactics and tools of both theoretical and practical nature are welcome.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <BusinessGeneralArticles></BusinessGeneralArticles>
                </div>
            </div>
        </div>
    );
};

export default BusinessGeneralScope;