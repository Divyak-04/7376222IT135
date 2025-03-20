import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/test";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDUxMTIwLCJpYXQiOjE3NDI0NTA4MjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImI1Y2I0YjNhLTRkYjYtNGQ0ZC05NDc5LTQzYjQwZDg5NmM3ZSIsInN1YiI6ImRpdnlhLml0MjJAYml0c2F0aHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJhZmZvcmRtZWQiLCJjbGllbnRJRCI6ImI1Y2I0YjNhLTRkYjYtNGQ0ZC05NDc5LTQzYjQwZDg5NmM3ZSIsImNsaWVudFNlY3JldCI6IkVkaEt3cENzZVFDZmNyd0QiLCJvd25lck5hbWUiOiJkaXZ5YSIsIm93bmVyRW1haWwiOiJkaXZ5YS5pdDIyQGJpdHNhdGh5LmFjLmluIiwicm9sbE5vIjoiNzM3NjIyMklUMTM1In0.IbukvjoHv7Ac0cV2mr6g-UTloYONOPIMCWMQo9TktMU";

// Create an Axios instance with base settings
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Fetch users
export const fetchUsers = async () => {
    try {
      console.log("Fetching users with token:", ACCESS_TOKEN);
  
      const response = await apiClient.get("/users");
      
      console.log("Response Data:", response.data); // Log response
      
      if (response.data?.users) {
        return Object.entries(response.data.users).map(([id, name]) => ({
          id,
          name,
        }));
      }
      return [];
    } catch (error) {
      console.error("Fetch Users Error:", error.response?.data || error.message);
      
      if (error.response) {
        console.error(`Status Code: ${error.response.status}`);
        console.error(`Error Message: ${error.response.data?.message || "Unknown error"}`);
        
        if (error.response.status === 401) {
          alert("Unauthorized! Please check your API token.");
        }
      }
      
      return [];
    }
  };
  

// Fetch posts
export const fetchPosts = async () => {
  try {
    const response = await apiClient.get("/posts");
    return response.data || [];
  } catch (error) {
    handleApiError(error, "fetching posts");
    return [];
  }
};

// Generic API error handler
const handleApiError = (error, action) => {
  if (error.response) {
    console.error(
      `Error ${action}:`,
      `Status: ${error.response.status},`,
      `Message: ${error.response.data?.message || error.response.statusText}`
    );

    if (error.response.status === 401) {
      alert("Unauthorized! Please check your API token.");
    } else if (error.response.status === 404) {
      alert("Resource not found!");
    }
  } else {
    console.error(`Error ${action}:`, error.message);
  }
};
