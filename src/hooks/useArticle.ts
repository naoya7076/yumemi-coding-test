import { useEffect, useState } from "react";
type ArticleType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useArticle = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  useEffect(() => {
    const getArticles = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setArticles(data));
    };
    getArticles();
  }, []);
  return { articles };
};
