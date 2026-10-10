import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { BlogForm } from "./components/BlogForm";
import { BlogList } from "./components/BlogList";

function App() {
  const [count, setCount] = useState(0);
  const [blog, setBlog] = useState([]);

  const addBlog = (newBlog) => {
    setBlog([...blog, newBlog]);
  };

  return (
    <>
      <Navbar />
      <BlogForm addBlog={addBlog} />
      <BlogList blog={blog}/>
    </>
  );
}

export default App;
