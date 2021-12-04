import React from 'react';

const BlogContext = React.createContext();

const BlogProvider = function ({ children }) {
  return (
    <BlogContext.Provider value={[1, 2, 3]}>{children}</BlogContext.Provider>
  );
};

export { BlogProvider };
export default BlogContext;
