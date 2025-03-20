import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api";

const TopUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
      fetchUsers()
        .then((data) => {
          if (data.length === 0) {
            setError("Failed to fetch users. Please check API authentication.");
          } else {
            setUsers(data);
          }
        })
        .catch((err) => {
          console.error("Error in useEffect:", err);
          setError("Failed to fetch users. Please check API authentication.");
        });
    }, []);
    

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Top Users</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="mt-4 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b">
            <span className="font-semibold">ID {user.id}:</span> {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
