import Challenge from "./Challenge";

/* eslint-disable react/prop-types */
function ChallengeList({ challenges, onDelete }) {
  return (
    <div className="p-4 w-full">
      <h2 className="text-xl font-bold mb-3 text-white text-center">Challenge List</h2>
      <div className="flex flex-col gap-2">
        {challenges.map(challenge => (
          <Challenge 
            key={challenge.id} 
            challenge={challenge} 
            onDelete={onDelete} // Make sure this line is correct
          />
        ))}
      </div>
    </div>
  );
}

export default ChallengeList;
