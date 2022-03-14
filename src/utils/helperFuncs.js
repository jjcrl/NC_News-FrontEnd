export const formatDate = (timeString) => {
  console.log(timeString);
  const year = timeString.slice(0, 4);
  const month = timeString.slice(6, 7);
  const day = timeString.slice(9, 10);
  return `${day}/${month}/${year}`;
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
