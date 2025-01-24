

'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  const [posts, setPosts] = useState([]); // State to store posts
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetching data using Axios inside useEffect
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data.slice(0, 10)); // Fetch only the first 10 posts for brevity
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to run only once on component mount

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p> {/* Show a loading message while data is being fetched */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Bolger
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-lg font-medium text-gray-800 hover:text-blue-600"
            >
              Home
            </Link>

            {/* Correct usage of LoginLink */}
            <LoginLink>
              
              <span className="text-black">Profile</span>
               </LoginLink>

            
          
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 animate-fadeIn">
          Our Latest Blogs
        </h1>
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <li
              key={post.id}
              className={`bg-white shadow-md rounded-md p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out ${
                index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"
              }`}
            >
              <Link
                href={`/blogs/${post.id}`}
                className="text-lg font-medium text-blue-600 hover:text-blue-800"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
