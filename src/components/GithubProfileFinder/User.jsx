import React from "react";

const User = ({ userData }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = userData;

  const createdData = new Date();

  return (
    <div className="h-56 w-full border ">
      <div className="text-center h-24 w-24">
        {" "}
        <div>
          <img src={avatar_url} className="avatar" alt="User" />
        </div>
      </div>
      <div>
        <h1>Name: {name}</h1>
      </div>

      <div>
        <h2>Follower Count: {followers}</h2>
      </div>

      <div>
        <h2>Following: {following}</h2>
      </div>

      <div>
        <h2>public_repos: {public_repos}</h2>
      </div>

      <div>
        <h2>Created At: {created_at}</h2>
      </div>
    </div>
  );
};

export default User;
