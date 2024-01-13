import useArticles from "../../Hooks/useArticles";
import CPIArticleBox from "../CPIArticleBox/CPIArticleBox";



const ScienceReviewArticles = () => {
    const [articles] = useArticles()
    const agricultureArticles = articles.filter((article) => article.category === 'ScienceReview')
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

export default ScienceReviewArticles;