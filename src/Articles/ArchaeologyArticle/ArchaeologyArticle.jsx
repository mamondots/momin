import useArticles from "../../Hooks/useArticles";
import ArticleBox from "../ArticleBox/ArticleBox";




const ArchaeologyArticle = () => {
    const [articles] = useArticles()
    const engineeringArticles = articles.filter((article) => article.category === 'Archaeology')
    return (
        <div className="">
            <div>
                 {
                    engineeringArticles.map(articles => <ArticleBox key={articles._id} articles={articles}>

                    </ArticleBox>)
                 }
            </div>
        </div>
    );
};

export default ArchaeologyArticle;