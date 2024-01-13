import useArticles from "../../Hooks/useArticles";
import CPIArticleBox from "../CPIArticleBox/CPIArticleBox";



const ContemporaryGeneralArticles = () => {
    const [articles] = useArticles()
    const agricultureArticles = articles.filter((article) => article.category === 'CPI Contemporary Research')
    return (
        <div className="">
            <div>
                 {
                    agricultureArticles.map(articles => <CPIArticleBox key={articles._id} articles={articles}>

                    </CPIArticleBox>)
                 }
            </div>
        </div>
    );
};

export default ContemporaryGeneralArticles;