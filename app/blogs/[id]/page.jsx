import axios from "axios";

export default async function Blog({ params }) {
  const { id } = params; // Extract the dynamic id from the URL

  // Fetch the specific blog post by its id
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = response.data;

  return (
    <main className="min-h-screen bg-gradient-to-r from-green-50 to-blue-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg">{post.body}</p>
        <div className="mt-6">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}

