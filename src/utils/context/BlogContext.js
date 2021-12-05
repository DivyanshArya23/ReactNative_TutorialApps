import createDataContext from './createDataContext';
import uuid from '../methods/uuid';

const ACTIONS = {
  ADD_BLOGPOST: 'add_blogpost',
  DELETE_BLOGPOST: 'delete_blogpost',
};

const blogReducer = (state, action) => {
  let newBlog = {};
  // addBlogPost Data
  if (action.type === ACTIONS.ADD_BLOGPOST) {
    const newBlogId = uuid();
    const newBlogNumber = state.length + 1;
    newBlog = {
      id: newBlogId,
      title: `Blog Post #${newBlogNumber}`,
      content: action?.payload || '',
    };
  }
  switch (action.type) {
    case ACTIONS.ADD_BLOGPOST:
      return [...state, newBlog];
    case ACTIONS.DELETE_BLOGPOST:
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (content = 'Dummy Blog Content') => {
    dispatch({ type: ACTIONS.ADD_BLOGPOST, payload: content });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: ACTIONS.DELETE_BLOGPOST, payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
