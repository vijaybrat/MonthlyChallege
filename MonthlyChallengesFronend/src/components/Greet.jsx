import { useState } from "react";

/* eslint-disable react/prop-types */
function Greet({ name, message }) {
  const [messageState, setMessageState] = useState(message);
  const changeMessage = () => setMessageState("Message is changes here");

  return (
    <>
      <div className="text-2xl font-bold text-blue-500">Hello {name}</div>
      <p>{messageState}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={changeMessage}>
        Click me to change
      </button>
    </>
  );
}

export default Greet;

