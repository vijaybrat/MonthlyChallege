import { useEffect, useState } from "react";
import ChallengeList from "./components/ChallengeList";
import axios from "axios";
import AddChallenge from "./components/AddChallenge";

function App() {
  const [challenges, setChallenges] = useState([]);

  const fetchChallenges = async () => {
    try {
      const response = await axios.get("http://localhost:8080/challenges");
      setChallenges(response.data);
    } catch (error) {
      console.error("Error in the fetchChallenges function: ", error);
    }
  };
  useEffect(() => {
    fetchChallenges();
  }, []);

  const handleChallengeAdd = () => {
    fetchChallenges();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold underline text-white mb-6">
        Monthly Challenges
      </h1>
      <AddChallenge handleChallengeAdd={handleChallengeAdd} />
      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
