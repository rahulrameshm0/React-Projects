export const BlogList = ({ blog, deleteBlog }) => {
  return (
    <div>
      {blog.map((blogs) => {
        return (
          <div key={blogs.id} className="blog-post">
            <h1>Blog Post</h1>
            <p>Title: {blogs.title}</p>
            <p>Context{blogs.context}</p>
          </div>
        );
      })}
    </div>
  );
};
