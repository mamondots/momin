
import useArticles from "../../Hooks/useArticles";
import ArticleBox from "../ArticleBox/ArticleBox";


const IjatArticles = () => {
    const [articles] = useArticles()
    const accountingArticles = articles.filter((article) => article.category === 'Accounting')
    console.log(accountingArticles)

    // const [items,setItems] = useState([])
    // useEffect(() =>{
    //     fetch("http://localhost:5000/accounting")
    //     .then(res => res.json())
    //     .then(data =>{
    //         setItems(data)
    //     })
    // },[])
    return (
        <div className="">
            <div>
                 {
                    accountingArticles.map(articles => <ArticleBox key={articles._id} articles={articles}>

                    </ArticleBox>)

                    // items.map(item =><ArciveArticlesBox key={item._id} item={item}>

                    // </ArciveArticlesBox>)

                 }
            </div>
        </div>
    );
};

export default IjatArticles;