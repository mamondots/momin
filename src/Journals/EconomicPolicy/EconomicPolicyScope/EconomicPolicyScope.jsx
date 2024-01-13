import EconomicPolicyArticles from "../../../Articles/EconomicPolicyArticles/EconomicPolicyArticles";

const EconomicPolicyScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <div className='py-6 text-[15px]'>
                    <p>
                        <span className='font-medium text-[#91000D]'>Journal of Business & Economic Policy</span> is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of JBEP is to provide a platform for the international scholars, academicians and researchers to share the contemporary thoughts in the fields of business and economics. JBEP aims to promote interdisciplinary studies in business and economics and thus become the leading international journal in business and economics in the world
                    </p>

                    <p className='py-4'>
                        <span className='font-medium text-[#91000D]'>Journal of Business & Economic Policy</span> The journal publishes research papers in the all the fields of business and economics such as management, marketing, finance, economics, banking, accounting, human resources management, international business, hotel and tourism, entrepreneurship development, business ethics, international trade policy, international trade law, development studies, population studies, culture and business, corporate governance, cross-cultural studies, social business, corporate social responsibility, industrial psychology, and so on.
                    </p>

                    <p className='py-3 text-[#91000D]'>The journal is published in both print and online.</p>
                    <p>JBEP publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics in business and economics will occasionally be published. Business innovation and research strategies, tactics and tools of both theoretical and practical nature are welcome.</p>
                </div>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <EconomicPolicyArticles></EconomicPolicyArticles>
                </div>
            </div>
        </div>
    );
};

export default EconomicPolicyScope;