import api from "./apiConfig";

export const getPosts = async () => {
  try {
    const res = await api.get("/storefront/posts");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const res = await api.get(`/storefront/posts/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const res = await api.post("/storefront/posts", post);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id, post) => {
  try {
    const res = await api.put(`/storefront/posts/${id}`, post);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const res = await api.delete(`/storefront/posts/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
