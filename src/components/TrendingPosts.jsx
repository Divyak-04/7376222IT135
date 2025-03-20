import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts().then((data) => {
      if (data.length === 0) {
        setError("Failed to fetch posts.");
      } else {
        setPosts(data);
      }
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Trending Posts</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="p-2 border-b">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
