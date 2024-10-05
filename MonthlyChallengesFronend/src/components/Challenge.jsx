import axios from "axios";
import React from "react";

/* eslint-disable react/prop-types */
const Challenge = ({ challenge, onDelete }) => {
  const handleDelete = async () => {
    console.log(`Attempting to delete challenge with ID: ${challenge.id}`); // Log the ID
    try {
      const response = await axios.delete(`http://localhost:8080/challenges/${challenge.id}`);
      console.log("Delete response:", response.data); // Log the response
      onDelete(challenge.id);
      console.log("Challenge deleted successfully");
    } catch (error) {
      console.error("Error in deleting challenge", error); // Use console.error for error logging
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-600 p-4 rounded-lg w-full flex items-center justify-between">
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-semibold text-white uppercase">
          {challenge.month}
        </h5>
      </div>
      <p className="text-gray-300 text-center mt-2">{challenge.description}</p>
      <div className="flex justify-end mt-2">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Challenge;
