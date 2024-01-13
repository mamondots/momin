import useArticles from "../../Hooks/useArticles";
import ArticleBox from "../ArticleBox/ArticleBox";


const ContemporaryArticls = () => {
    const [articles] = useArticles()
    const agricultureArticles = articles.filter((article) => article.category === 'Contemporary Business')
    return (
        <div className="">
            <div>
                 {
                    agricultureArticles.map(articles => <ArticleBox key={articles._id} articles={articles}>

                    </ArticleBox>)
                 }
            </div>
        </div>
    );
};

export default ContemporaryArticls;