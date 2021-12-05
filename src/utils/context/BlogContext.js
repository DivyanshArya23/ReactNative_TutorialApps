import createDataContext from './createDataContext';
import uuid from '../methods/uuid';

const ACTIONS = {
  ADD_BLOGPOST: 'add_blogpost',
  DELETE_BLOGPOST: 'delete_blogpost',
  EDIT_BLOGPOST: 'edit_blogpost',
};

const blogReducer = (state, action) => {
  let newBlog = {};
  // addBlogPost Data
  if (action.type === ACTIONS.ADD_BLOGPOST) {
    const newBlogId = uuid();
    newBlog = {
      id: newBlogId,
      title: action?.payload?.title,
      content: action?.payload?.content || '',
    };
  }
  switch (action.type) {
    case ACTIONS.ADD_BLOGPOST:
      return [...state, newBlog];
    case ACTIONS.DELETE_BLOGPOST:
      return state.filter((blog) => blog.id !== action.payload);
    case ACTIONS.EDIT_BLOGPOST:
      return state.map((blog) => {
        if (blog.id === action.payload.id) {
          return action.payload;
        }
        return blog;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (
    title = 'Unnamed Blog Post',
    content = 'Dummy Blog Content',
    callback = () => {}
  ) => {
    dispatch({ type: ACTIONS.ADD_BLOGPOST, payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: ACTIONS.DELETE_BLOGPOST, payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (blog, callback = () => {}) => {
    dispatch({ type: ACTIONS.EDIT_BLOGPOST, payload: blog });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
