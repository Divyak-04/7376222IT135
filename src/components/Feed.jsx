import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchPosts().then((data) => setPosts(data));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Live Feed</h2>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="p-2 border-b">{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
