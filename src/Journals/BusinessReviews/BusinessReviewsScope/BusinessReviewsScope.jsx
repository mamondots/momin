import BusinessReviewsArticles from "../../../Articles/BusinessReviewsArticles/BusinessReviewsArticles";


const BusinessReviewsScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="py-4 gap-24 text-[15px]">
                <p>
                    Business Research Review publishes original papers, empirical research, case studies, literature review, conceptual framework, analytical and simulation models, technical notes, and book reviews. Special Issues devoted to important topics in business and economics will occasionally be published. Business innovation and research strategies, tactics and tools of both theoretical and practical nature are welcome.
                </p>

                <p className="py-2 text-[#91000D]">
                    BRR is an open access journal.
                </p>

                <p className="py-4">
                    The journal publishes research papers in the fields of accounting, analysis of contemporary business law, banking, business ethics, business policy, change in national and international economics, changes in capital market, contemporary government business policy, corporate governance, cross-cultural studies, development studies, economic theory, economics, emerging HR issues, emerging IT and business strategies, emerging regional trade blocks, entrepreneurship development, finance, globalization and business strategy, globalization and industrial sociology, green HRM, hotel and tourism, human resources management, innovation in management, international business, international business environment, international business law, international politics and business, legal & ethical environment of business, management, management information systems, managing workforce diversity, marketing, national and international business trends, role of WTO, EU, WB & IMF, social business, social entrepreneurship, strategic management, and total quality management.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <BusinessReviewsArticles></BusinessReviewsArticles>
                </div>
            </div>
        </div>
    );
};

export default BusinessReviewsScope;