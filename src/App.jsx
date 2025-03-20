import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import TopUsers from "./components/TopUsers";
import TrendingPosts from "./components/TrendingPosts";
import Feed from "./components/Feed";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex space-x-4 mb-4">
          <Link to="/top-users" className="text-blue-500 hover:underline">Top Users</Link>
          <Link to="/trending-posts" className="text-blue-500 hover:underline">Trending Posts</Link>
          <Link to="/feed" className="text-blue-500 hover:underline">Live Feed</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/top-users" />} />
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
