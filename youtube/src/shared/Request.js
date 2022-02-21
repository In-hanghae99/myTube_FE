import axios from 'axios';
import Category from '../components/Category';

const instance = axios.create({
  baseURL: 'http://54.180.137.157/',
  timeout: 1000,
  headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
});

// instance.defaults.headers.common["Authorization"] =
//   localStorage.getItem("token")

//  timeout: 180000
//  withCredentials: false
//  headers: {
//    "Content-Type": "application/json"
//    Authorization: `Bearer ${localStorage.getItem("token")}`
//  }

export const apis = {
  // post
  posts: () => instance.get('/api/posts'),
  post: (postId) => instance.get(`/api/posts/${postId}`, {}),
  add: (title, content, category, videoFile, imgFile) =>
    instance.post('/api/posts', title, content, category, videoFile, imgFile),
};

export default instance;
