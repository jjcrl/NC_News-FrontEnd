import axios from "axios";

const api = axios.create({
  baseURL: "https://j412cff-nc-news.herokuapp.com/api",
});

export const fecthAllArticles = async (topic, sort) => {
  if (!topic && !sort) {
    const res = await api.get("/articles");
    return res.data.articles;
  } else if (topic) {
    const res_1 = await api.get(`/articles?topic=${topic}`);
    return res_1.data.articles;
  } else if (sort) {
    const res_2 = await api.get(`/articles?sort_by=${sort}&order=asc`);
    return res_2.data.articles;
  }
};

export const fetchAllTopics = async () => {
  const res = await api.get("/topics");
  return res.data.topics;
};

export const fetchArticle = async (id) => {
  const res = await api.get(`articles/${id}`);
  return res.data.article;
};

export const patchVotes = async (vote, id) => {
  const body = { inc_votes: vote, username: "butterbridge" };

  console.log(vote);

  const res = await api.patch(`/articles/${id}`, body);
  return res.data.article.votes;
};

export const fetchArticleComments = async (id) => {
  const res = await api.get(`/articles/${id}/comments`);
  return res.data.comments;
};

export const postComment = async (comment) => {
  console.log(comment);
  const body = {
    username: comment.user,
    body: comment.body,
  };
  const res = await api.post(`/articles/${comment.id}/comments`, body);
  return res.data.comment;
};
