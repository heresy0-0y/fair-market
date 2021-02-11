const compareKey = (key) => (a, b) => {
  if (a[key] < b[key]) {
    return -1;
  }
  if (a[key] > b[key]) {
    return 1;
  }
  return 0;
};

// one liner
// const compareKey = key => (a, b) => a[key] == b[key]? (a[key] < b[key] ? -1 : 1) : 0

export const mostRecent = (arr) => arr.sort(compareKey("createdAt"));
export const mostOld = (arr) => arr.sort(compareKey("createdAt")).reverse();
export const lonelyPostsFirst = (arr) =>
  arr.sort((a, b) => parseInt(a.createdAt) - parseInt(b.createdAt));
export const sociallyEngaged = (arr) =>
  arr.sort((a, b) => parseInt(b.createdAt) - parseInt(a.createdAt));
