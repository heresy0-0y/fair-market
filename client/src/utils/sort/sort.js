const compareKey = (key) => (a, b) => {
  const dateA = new Date(a[key]);
  const dateB = new Date(b[key]);
  if (Date.parse(dateA) < Date.parse(dateB)) {
    return 1;
  }
  if (Date.parse(dateA) > Date.parse(dateB)) return -1;
};

export const mostRecent = (arr) => arr.sort(compareKey("createdAt"));
// one liner
// const compareKey = key => (a, b) => a[key] == b[key]? (a[key] < b[key] ? -1 : 1) : 0

export const mostOld = (arr) => arr.sort(compareKey("createdAt")).reverse();
export const lonelyPostsFirst = (arr) =>
  arr.sort((a, b) => parseInt(a.createdAt) - parseInt(b.createdAt));
export const sociallyEngaged = (arr) =>
  arr.sort((a, b) => parseInt(b.createdAt) - parseInt(a.createdAt));
