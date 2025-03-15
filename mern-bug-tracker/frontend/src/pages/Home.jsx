import { useEffect, useState } from "react";
import axios from "axios";
import BugForm from "../components/BugForm";
import BugList from "../components/BugList";

const Home = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bugs").then((res) => setBugs(res.data));
  }, []);

  const addBug = (newBug) => {
    setBugs([...bugs, newBug]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Bug Tracker🐞</h1>
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <BugForm onBugAdded={addBug} />
        <BugList bugs={bugs} />
      </div>
    </div>
  );
};

export default Home;
