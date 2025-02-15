import { useEffect, useState } from "react";
import ShowSuggesations from "./ShowSuggesations";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [searchParams, setSearchParams] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showSuggesations, setShowSuggesations] = useState(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users.length && data.users) {
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
      } else {
        console.log("error");
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleInputChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query && query.length) {
      const filtered =
        users &&
        users.length &&
        users.filter((user) => user.toLowerCase().startsWith(searchParams));
      setFilteredUsers(filtered);
      setShowSuggesations(true);
    } else {
      setShowSuggesations(false);
    }
  }

  function handleSuggesationClick(suggesation) {
    setSearchParams(suggesation);
    setShowSuggesations(false);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <input
        value={searchParams}
        onChange={handleInputChange}
        type="text"
        className="border "
      />
      {showSuggesations && (
        <ShowSuggesations
          filteredUsers={filteredUsers}
          handleSuggesationClick={handleSuggesationClick}
        />
      )}
    </div>
  );
};

export default SearchAutoComplete;
