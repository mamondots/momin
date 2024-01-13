import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ArticleRoutingTop = ({children}) => {
    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0,400)
    },[pathname])

    return children
};
export default ArticleRoutingTop;