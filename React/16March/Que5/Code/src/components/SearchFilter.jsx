import { useState } from "react";

function SearchFilter() {
  const users = ["John", "Jane", "Alex", "Chris", "Mike"];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Search</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      {/* Filtered list */}
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {user}
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
