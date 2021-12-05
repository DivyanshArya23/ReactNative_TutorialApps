import createDataContext from './createDataContext';
import { blogAxios } from '../axios/blog';
import apiEndpoints from '../../config/apiEndpoints';

const ACTIONS = {
  DELETE_BLOGPOST: 'delete_blogpost',
  EDIT_BLOGPOST: 'edit_blogpost',
  GET_BLOGPOSTS: 'get_blogposts',
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DELETE_BLOGPOST:
      return state.filter((blog) => blog.id !== action.payload);
    case ACTIONS.EDIT_BLOGPOST:
      return state.map((blog) => {
        if (blog.id === action.payload.id) {
          return action.payload;
        }
        return blog;
      });
    case ACTIONS.GET_BLOGPOSTS:
      return action.payload;

    default:
      return state;
  }
};

const addBlogPost = () => {
  return async (
    title = 'Unnamed Blog Post',
    content = 'Dummy Blog Content',
    callback = () => {}
  ) => {
    await blogAxios.post(apiEndpoints.blogPosts, {
      title,
      content,
    });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await blogAxios.delete(`${apiEndpoints.blogPosts}/${id}`);
    dispatch({ type: ACTIONS.DELETE_BLOGPOST, payload: id });
  };
};

const editBlogPost = () => {
  return async (blog, callback = () => {}) => {
    await blogAxios.put(`${apiEndpoints.blogPosts}/${blog.id}`, blog);
    callback();
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    try {
      const response = await blogAxios.get(apiEndpoints.blogPosts);
      dispatch({ type: ACTIONS.GET_BLOGPOSTS, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
