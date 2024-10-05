import axios from "axios";
import { useState } from "react";

/* eslint-disable react/prop-types */
function AddChallenge({ handleChallengeAdd }) { // Correct destructuring
  const [month, setMonth] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/challenges", { month, description });
      setDescription("");
      setMonth("");
      handleChallengeAdd(); // This will now work correctly
      console.log("Challenge added successfully");
    } catch (error) {
      console.log("Error in adding challenge", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Add Challenge</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="month" className="block text-gray-300 mb-2">Month</label>
          <input
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
            placeholder="Enter month"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-300 mb-2">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
            placeholder="Enter description"
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
            Add Challenge
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddChallenge;
