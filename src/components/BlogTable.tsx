import { useState, useMemo } from "react"
import { useArticle } from "../hooks/useArticle"
export const BlogTable:React.FC = () => {
    const [itemsPP, setItemsPP] = useState<number>(5)
    const {articles} = useArticle()
    const [page, setPage] = useState(1)
    const displayArticles = useMemo(() =>{
        const start = (page -1) * itemsPP
        return articles.slice(start, start + itemsPP)
    },[articles, page, itemsPP]);
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPP(parseInt(e.target.value))
        setPage(1)
    }
    return(
        <>
            <select onChange={handleSelect}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </select>
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
