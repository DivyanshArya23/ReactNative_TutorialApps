import React, { useState } from 'react';

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

const BlogProvider = function ({ children }) {
  const [blogPosts, setBlogPosts] = useState(BlogPost);

  const addBlogPost = (content = 'Dummy Blog Content') => {
    const newBlogNumber = blogPosts.length + 1;
    const newBlog = {
      id: newBlogNumber,
      title: `Blog Post #${newBlogNumber}`,
      content,
    };
    setBlogPosts([...blogPosts, newBlog]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider };
export default BlogContext;
