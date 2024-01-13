import IslamicArticles from "../../../Articles/IslamicArticles/IslamicArticles";


const IslamicScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    Fundamentals of Islamic Banking and Finance,
                    Historical Background of Islamic Banking and Finance,
                    Establishment of Islamic Banks,
                    Islamic Banks Operating Systems,
                    Islamic Banking Law,
                    The Development of Modern Islamic Finance,
                    Islamic Banking Infrastructure,
                    Islamic Asset Management,
                    The Application of Islamic Financial Products in Practice,
                    Governance in Islamic Banks,
                    Islamic Finance and National Economy,
                    Sharee´Ah Board,
                    Mudaraabah,
                    Muraabahah and Other Forms of Amaanah Trade,
                    Amaanah & Value Added,
                    Muraabahah Vs Interest Financing,
                    Salam Form,
                    Istisnaa´ Form,
                    Ijaarah Form Accounts Comparison,
                    Islamic Vs Interest Based Banking,
                    Islamic Banking and the Judgment Criteria,
                    Islamic Stock Market,
                    Problems Facing Islamic Banks,
                    Takaaful,
                    Sukuk.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <IslamicArticles></IslamicArticles>
                </div>
            </div>
        </div>
    );
};

export default IslamicScope;