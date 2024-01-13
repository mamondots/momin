import HumanitiesGeneralArticles from "../../../Articles/HumanitiesGeneralArticles/HumanitiesGeneralArticles";

const HumanitiesGeneralScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="py-4 gap-24 text-[15px]">
                <p className="">
                    International Journal of Humanities and Social Science (IJHSS) is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of IJHSS is to provide an intellectual platform for the international scholars. IJHSS aims to promote interdisciplinary studies in humanities and social science and become the leading journal in humanities and social science in the world.
                </p>

                <p className="py-2">
                    The journal publishes research papers in the fields of humanities and social science such as anthropology, business studies, communication studies, corporate governance, criminology, crosscultural studies, demography, development studies, economics, education, ethics, geography, history, industrial relations, information science, international relations, law, linguistics, library science, media studies, methodology, philosophy, political science, population Studies, psychology, public administration, sociology, social welfare, linguistics, literature, paralegal, performing arts (music, theatre & dance), religious studies, visual arts, women studies and so on.
                </p>

                <p className="text-[#91000D] py-4">
                    The journal is published in both print and online versions.
                </p>

                <p>
                    IJHSS publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics in humanities and social science will occasionally be published.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <HumanitiesGeneralArticles></HumanitiesGeneralArticles>
                </div>
            </div>
        </div>
    );
};

export default HumanitiesGeneralScope;