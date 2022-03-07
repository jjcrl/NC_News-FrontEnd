import axios from "axios";

const api = axios.create({
  baseURL: "https://j412cff-nc-news.herokuapp.com/api",
});

export const fecthAllArticles = () => {
  return api.get("/articles").then((res) => {
    return res.data.articles;
  });
};
