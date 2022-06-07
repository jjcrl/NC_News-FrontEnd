export const formatDate = (timeString) => {
  const year = timeString.slice(2, 4);
  const month = timeString.slice(5, 7);
  const day = timeString.slice(8, 10);
  const time = timeString.slice(11, 16);
  const date = `${day}.${month}.${year}`;
  return date + " " + time;
};

export const countTopics = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key]++;
    return acc;
  }, {});
};

export const countTopicEngagemet = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const votes = obj.votes;
    const comments = Number(obj.comment_count);
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += votes + comments;
    return acc;
  }, {});
};
