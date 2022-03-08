import axios from "axios";

const api = axios.create({
  baseURL: "https://j412cff-nc-news.herokuapp.com/api",
});

export const fecthAllArticles = (topic) => {
  if (!topic) {
    return api.get("/articles").then((res) => {
      return res.data.articles;
    });
  } else {
    return api.get(`/articles?topic=${topic}`).then((res) => {
      return res.data.articles;
    });
  }
};

export const fetchAllTopics = () => {
  return api.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const fetchArticle = (id) => {
  return api.get(`articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const patchVotes = (vote, id) => {
  const body = { inc_votes: vote, username: "butterbridge" };
  return api.patch(`/articles/${id}`, body).then((res) => {
    return res.data.article.votes;
  });
};

export const fetchArticleComments = (id) => {
  return api.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};
