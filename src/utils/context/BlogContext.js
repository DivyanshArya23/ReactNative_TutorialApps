import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const BlogPost = [
  {
    id: 1,
    title: 'Blog Post #1',
    content: 'Dummy Blog Content',
  },
  {
    id: 2,
    title: 'Blog Post #2',
    content: 'Dummy Blog Content',
  },
];

const ACTIONS = {
  ADD_BLOGPOST: 'add_blogpost',
};

const blogReducer = (state, action) => {
  let newBlog = {};
  // addblogPost Data
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

const BlogProvider = function ({ children }) {
  const [blogPosts, dispatch] = useReducer(blogReducer, BlogPost);

  const addBlogPost = (content = 'Dummy Blog Content') => {
    dispatch({ type: ACTIONS.ADD_BLOGPOST, payload: content });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider };
export default BlogContext;
