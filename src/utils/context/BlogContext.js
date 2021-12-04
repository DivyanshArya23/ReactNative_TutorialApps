import React from 'react';

const BlogContext = React.createContext();

const BlogPost = [
  {
    id: 0,
    title: 'Blog Post #1',
  },
  {
    id: 1,
    title: 'Blog Post #2',
  },
];

const BlogProvider = function ({ children }) {
  return (
    <BlogContext.Provider value={BlogPost}>{children}</BlogContext.Provider>
  );
};

export { BlogProvider };
export default BlogContext;
