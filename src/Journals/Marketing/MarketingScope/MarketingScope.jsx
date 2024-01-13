import MarketingArticles from "../../../Articles/MarketingArticles/MarketingArticles";

const MarketingScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    Advertising,
                    Consumer Behavior,
                    Marketing Research,
                    Integrated Marketing,
                    Internet Marketing,
                    E-Commerce,
                    Persuasive Strategies,
                    Relationship Marketing,
                    Marketing and Business Ethics,
                    Public Relations,
                    Media and Crisis Communication,
                    Public Relations & Promotional Strategy,
                    Distribution Strategies,
                    Product Development Strategies,
                    Pricing,
                    Service Marketing,
                    Strategic Marketing,
                    Brand Management,
                    Customer Relationship Management,
                    International Marketing,
                    Marketing Environment,
                    Retail Management,
                    Tele Marketing,
                    Contemporary Marketing Thoughts,
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                        <MarketingArticles></MarketingArticles>
                </div>
            </div>
        </div>
    );
};

export default MarketingScope;