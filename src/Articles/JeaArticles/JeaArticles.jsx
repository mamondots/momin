import useArticles from "../../Hooks/useArticles";
import ArticleBox from "../ArticleBox/ArticleBox";



const JeaArticles = () => {
    const [articles] = useArticles()
    const engineeringArticles = articles.filter((article) => article.category === 'Architectures')
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

export default JeaArticles;