import ContemporaryGeneralArticles from "../../../Articles/ContemporaryGeneralArticles/ContemporaryGeneralArticles";

const ContemporaryGeneralScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="py-4 text-[15px] gap-24">
                <p>
                    <span className='font-medium text-[#91000D]'>American International Journal of Contemporary Research</span>  is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of AIJCR is to provide an intellectual platform for the research community. AIJCR aims to promote contemporary research in business, humanities, social science, science and technology and become the leading journal in the world.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>The journal publishes research papers in three broad specific fields as follows:</span>
                </p>

                <p className='font-bold text-[#0A2258]'>Business and Economics</p>

                <p className='py-2'>
                    Management, marketing, finance, economics, banking, accounting, human resources management, international business, hotel and tourism, entrepreneurship development, business ethics, development studies and so on.
                </p>

                <p className='font-bold text-[#0A2258]'>Humanities and Social science</p>

                <p className='py-2'>
                    Anthropology, communication studies, corporate governance, criminology, cross-cultural studies, demography, education, ethics, geography, history, industrial relations, information science, international relations, law, linguistics, library science, media studies, methodology, philosophy, political science, population Studies, psychology, public administration, sociology, social welfare, linguistics, literature, paralegal, performing arts (music, theatre & dance), religious studies, visual arts, women studies
                </p>

                <p className='font-bold text-[#0A2258]'>Science and Technology</p>

                <p className='py-2'>
                    Astronomy and astrophysics, Chemistry, Earth and atmospheric sciences, Physics, Biology in general, Agriculture, Biophysics and biochemistry, Botany, Environmental Science, Forestry, Genetics, Horticulture, Husbandry, Neuroscience, Zoology, Computer science, Engineering, Robotics and Automation, Materials science, Mathematics, Mechanics, Statistics, Health Care & Public Health, Nutrition and Food Science, Pharmaceutical Sciences, and so on
                </p>

                <p className='text-[#91000D]'>The journal is published in both print and online versions.</p>
                <p className='py-4'>
                AIJCR publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics in business, humanities, social science, science and technology will occasionally be published.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>American International Journal of Contemporary Research</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
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
            </div>

            <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                    <div>
                         <ContemporaryGeneralArticles></ContemporaryGeneralArticles>
                    </div>
                </div>
        </div>
    );
};

export default ContemporaryGeneralScope;