import ArticleModal from "../ArticleModal/ArticleModal";

const ArticleBox = ({ articles }) => {
    const { } = articles
    return (
        <div className="w-full">
            <div>
                <div className="flex items-center space-x-1  font-medium text-center justify-center py-1">
                    <p className="capitalize"><span></span>{articles.volume}</p>
                    <p className="capitalize"><span></span>{articles.issue}</p>
                    <p>{articles.month}</p>
                    <p>{articles.year}</p>
                </div>
                <div className="my-4">
                    <h2 className="font-medium text-[#072159]">{articles.title}</h2>
                    <p className="text-[#262626d2] py-1">{articles.author}</p>
                    <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap lg:space-x-2 py-1 items-center">
                        <p className="text-[#91000D]">{articles.journal}</p>
                        <p className="">{articles.serial}</p>
                    </div>
                    <div className="flex flex-wrap items-center lg:space-x-12">

                        <div className="flex items-center">
                            <p className="font-bold"></p>
                            <p className="text-[#09567c] hover:text-[#91000D] duration-200 cursor-pointer">{articles.doi}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="font-bold"></p>
                            <p className="text-[#09567c] hover:text-[#91000D] duration-200 cursor-pointer">{articles.doiURL}</p>
                        </div>

                    </div>

                    <div className="flex items-center space-x-4 my-4">
                        <div>
                            <button className="px-2 py-2 bg-[#91000D] text-[#fff] text-sm font-medium rounded"><ArticleModal articles={articles}></ArticleModal></button>
                        </div>
                        <div>
                            <a href={articles.pdf} target="_blank" className="px-2 py-2 bg-[#91000D] text-[#fff] text-sm font-medium rounded">PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ArticleBox;