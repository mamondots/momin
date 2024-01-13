import BUTArticles from "../../../Articles/BUTArticles/BUTArticles";

const BUTScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="py-8 gap-24 text-[15px]">
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Business, Humanities and Technology</span>  is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The objective of IJBHT is to provide a forum for the publication of scientific articles in the fields of business, humanities and technology. In pursuit of this objective the journal not only publishes high quality research papers but also ensures that the published papers achieve broad international credibility.

                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>International Journal of Business, Humanities and Technology</span>  The journal publishes research papers in the fields of management, business law, public responsibility and ethics, marketing theory and applications, business finance and investment, general business research, business and economics education, international business and economics, tourism and hospitality management, production/operations management, organizational behavior and theory, strategic management policy, social issues and public policy, management organization, statistics and econometrics, personnel and industrial relations, gender studies, cross cultural studies, entrepreneurship development, linguistics, library science, media studies, methodology, philosophy, political science, population Studies, psychology, public administration, sociology, social welfare, technology and innovation, case studies , management information systems, information technology and so on.
                </p>

                <p className="text-[#91000D] py-3">The journal is published both in print and online versions.</p>
                <p>
                    IJBHT publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics in business, humanities and technology will occasionally be published.
                </p>
                
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <BUTArticles></BUTArticles>
                </div>
            </div>
        </div>
    );
};

export default BUTScope;