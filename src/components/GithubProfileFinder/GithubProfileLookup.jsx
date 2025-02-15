import React, { useEffect, useRef, useState } from "react";
import User from "./User";

const GithubProfileLookup = () => {
  const [username, setUsername] = useState("IamAshish2");
  const [data, setData] = useState([]);

  async function getUsername(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getUsername(username);
  }, []);

  console.log(data);
  

  return (
    <div className="p-2 flex flex-col justify-center items-center align-middle min-h-screen sm:w-96">
      <div>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          className="border p-2 m-2 w-44"
        />
        <button
          onClick={() => {
            getUsername(username);
          }}
          className="border p-2 w-24"
        >
          Search
        </button>
      </div>
      {data !== null && <User userData={data} />}
    </div>
  );
};

export default GithubProfileLookup;
