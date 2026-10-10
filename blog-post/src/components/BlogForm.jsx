import { useState } from "react";

export const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const titles = (event) => {
    setTitle(event.target.value);
  };

  const contexts = (event) => {
    setContext(event.target.value);
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();

    const blog =  {
        title: title,
        context: context
    };

    addBlog(blog);

    setTitle("")
    setContext("")

    console.log(blog)
  };

  return (
    <div>
      <h3>Creating a new Blog</h3>
      <p>Wright your thoughts and share it with everyone</p>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder="Enter the title" onChange={titles} value={title}/>
        <label htmlFor="context">context</label>
        <textarea name="context" id="context" value={context} onChange={contexts}></textarea>

        <button onClick={handleSubmitButton}>Submit</button>
      </form>
    </div>
  );
};
