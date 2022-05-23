import axios from "axios";

const api = axios.create({
  baseURL: "https://j412cff-nc-news.herokuapp.com/api",
});

export const fecthAllArticles = (topic, sort) => {
  if (!topic && !sort) {
    return api.get("/articles").then((res) => {
      return res.data.articles;
    });
  } else if (topic) {
    return api.get(`/articles?topic=${topic}`).then((res) => {
      return res.data.articles;
    });
  } else if (sort) {
    return api.get(`/articles?sort_by=${sort}&order=desc`).then((res) => {
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

  console.log(vote);

  return api.patch(`/articles/${id}`, body).then((res) => {
    return res.data.article.votes;
  });
};

export const fetchArticleComments = (id) => {
  return api.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postComment = (comment) => {
  console.log(comment);
  const body = {
    username: comment.user,
    body: comment.body,
  };
  return api.post(`/articles/${comment.id}/comments`, body).then((res) => {
    return res.data.comment;
  });
};
