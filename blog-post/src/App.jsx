import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { BlogForm } from "./components/BlogForm";

function App() {
  const [count, setCount] = useState(0);
  const[blog, setBlog] = useState([])

  const addBlog = (newBlog) => {
    setBlog([...blog, newBlog])  
  };

  return (
    <>
      <Navbar />
      <BlogForm addBlog={addBlog}/>
      <hr />
    </>
  );
}

export default App;
