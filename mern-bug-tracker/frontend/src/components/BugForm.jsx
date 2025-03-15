import { useState } from "react";
import axios from "axios";

const BugForm = ({ onBugAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBug = { title, description };
    const res = await axios.post("http://localhost:5000/api/bugs", newBug);
    onBugAdded(res.data);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Report a Bug🐛</h2>
      <input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Bug title"
        required
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Bug description"
        required
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Add Bug
      </button>
    </form>
  );
};

export default BugForm;