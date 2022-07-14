//import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, errMsg, isLoading } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {errMsg && <h2>{errMsg}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
