import { useState, useMemo } from "react"
import { useArticle } from "../hooks/useArticle"
export const BlogTable:React.FC = () => {
    const ITEMS_PER_PAGE = 5
    const {articles} = useArticle()
    const [page, setPage] = useState(1)
    const displayArticles = useMemo(() =>{
        const start = (page -1) * ITEMS_PER_PAGE
        return articles.slice(start, start + ITEMS_PER_PAGE)
    },[articles, page]);
    return(
        <>
            <table>
                <thead>
                    {displayArticles.map((article,index) =>
                        <tr key={index}>
                            <th>{article.title}</th>
                        </tr>
                    )}
                </thead>
            </table>
            <button onClick={() => setPage((page) => page - 1)} disabled={page <= 1}>Prev Page</button>
            <button onClick={() => setPage((page) => page + 1)}>Next Page</button>
        </>
    )
}
