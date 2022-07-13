import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Requested Resource cannot be found");
        }
        setIsLoading();
        return res.json();
      })
      .then((data) => {
        setErrMsg(null);
        setBlogs(data);
      })
      .catch((err) => {
        setErrMsg(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {errMsg && <h2>{errMsg}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
