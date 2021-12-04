import createDataContext from './createDataContext';

const ACTIONS = {
  ADD_BLOGPOST: 'add_blogpost',
};

const blogReducer = (state, action) => {
  let newBlog = {};
  // addBlogPost Data
  if (action.type === ACTIONS.ADD_BLOGPOST) {
    const newBlogNumber = state.length + 1;
    newBlog = {
      id: newBlogNumber,
      title: `Blog Post #${newBlogNumber}`,
      content: action?.payload || '',
    };
  }
  switch (action.type) {
    case ACTIONS.ADD_BLOGPOST:
      return [...state, newBlog];
    default:
      return state;
  }
};
const addBlogPost = (dispatch, content = 'Dummy Blog Content') => {
  return () => {
    dispatch({ type: ACTIONS.ADD_BLOGPOST, payload: content });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
